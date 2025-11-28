import { NextResponse } from "next/server";
import { createUser, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, password, and name are required" },
        { status: 400 }
      );
    }

    const user = await createUser(email, password, name);

    if (!user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    await setAuthCookie(user);

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "An error occurred during signup" },
      { status: 500 }
    );
  }
}
