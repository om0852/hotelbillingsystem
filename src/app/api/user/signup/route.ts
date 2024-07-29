import User from "@/modals/UserModal";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    connectDB();
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Fill all the fields" },
        { status: 400 }
      );
    }
    await User.create({ name, email, password });
    return NextResponse.json(
      { message: "Account Created Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 400 }
    );
  }
}
