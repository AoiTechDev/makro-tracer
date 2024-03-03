import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "./lib/rate-limiter";

export async function middleware(req: NextRequest) {
  const ip = req.ip ?? process.env.IP_ADDRESS!;

  try {
    const { success } = await rateLimiter.limit(ip);
    if (!success) {
      return new NextResponse("You are writing messages too fast.");
    }
    return NextResponse.next();
  } catch (err) {
    return new NextResponse(
      "Sorry, something went wrong processing your message. Please try again later."
    );
  }
}
export const config = {
  matcher: "/api/message/:path*",
};
