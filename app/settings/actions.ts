"use server";

import { getServerSession } from "next-auth";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
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
    Key: session.user?.email!,
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
    INSERT INTO usersAvatars (url, userId)
    VALUES (${signedURL.split("?")[0]}, ${user.userid})
    ON CONFLICT (userId) DO UPDATE
    SET url = excluded.url
    `;

    return { success: { url: signedURL } };
  } catch (err) {
    console.error(err);
    return { failure: "Failed to upload image" };
  }
}

export async function getAvatarImage() {
  const session = await getServerSession();
  if (!session) {
    return { failure: "Not authenticated" };
  }
  try {
    const response = await sql`
        SELECT * FROM users WHERE email=${session.user?.email!}
        `;
    const user = response.rows[0];
    const avatar = await sql`
        SELECT url FROM usersAvatars WHERE userId=${user.userid}
        `;
    // console.log(avatar)

    return { success: { url: avatar.rows[0]?.url } };
  } catch (err) {
    console.error(err);
    return { failure: "Failed to get image" };
  }
}
