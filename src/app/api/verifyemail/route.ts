import { sendMail } from "@/lib/mail";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const getCode = await sendMail(email);
    return NextResponse.json({
      message: "Email sent successfully",
      code: getCode,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
