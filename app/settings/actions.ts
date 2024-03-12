"use server";

import { getServerSession } from "next-auth";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";
const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const acceptedTypes = ["image/jpeg", "image/png", "image/webp"];

const MAX_FILE_SIZE = 1024 * 1024 * 5;

export async function getSignedURL(
  type: string,
  size: number,
  checksum: string
) {
  const session = await getServerSession();

  if (!session) {
    return { failure: "Not authenticated" };
  }

  if (!acceptedTypes.includes(type)) {
    return { failure: "Invalid file type" };
  }

  if (size > MAX_FILE_SIZE) {
    return { failure: "File is too large" };
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: checksum,
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
    Metadata: {
      userEmail: session.user?.email!,
    },
  });

  const signedURL = await getSignedUrl(s3, putObjectCommand, { expiresIn: 60 });

  try {
    const response = await sql`
    SELECT * FROM users WHERE email=${session.user?.email!}
    `;
    const user = response.rows[0];
    const avatar = await sql`
    INSERT INTO users (avatar, userId)
    VALUES (${signedURL.split("?")[0]}, ${user.userid})
    ON CONFLICT (userId) DO UPDATE
    SET avatar = excluded.avatar
    `;

    return { success: { url: signedURL } };
  } catch (err) {
    console.error(err);
    return { failure: "Failed to upload image" };
  }
}




type UserInfoResponse = {
  success?: {
    avatar: string | undefined;
    name: string | null ;
  };
  failure?: string;
};

export async function getUserInfo(): Promise<UserInfoResponse> {
  const session = await getServerSession();
  if (!session) {
    return { failure: "Not authenticated" };
  }
  try {
    const response = await sql`
        SELECT avatar, name FROM users WHERE email=${session.user?.email!}
        `;
    const user = response.rows[0];

    return { success: { avatar: user.avatar, name: user.name } };
  } catch (err) {
    console.error(err);
    return { failure: "Failed to get image" };
  }
}

export async function changeName(formData: FormData) {
  const session = await getServerSession();
  if (!session) {
    return { failure: "Not authenticated" };
  }
  const nameSchema = z.string().min(1).max(50);
  const validatedName = nameSchema.safeParse(formData.get("name"));

  if (!validatedName.success) {
    return { failure: "Invalid name" };
  }

  try {
    await sql`
   UPDATE users SET name = ${validatedName.data} WHERE email=${session.user?.email!}
    `;

    revalidatePath("/settings");
  } catch (err) {
    console.error(err);
    return { failure: "Failed to change name" };
  }
}
