import { cookies } from "next/headers";

export interface User {
  id: string;
  name: string;
  email: string;
}

// In-memory user storage (for demo purposes)
// In production, use a real database
const users: Map<string, { email: string; password: string; name: string }> = new Map();

// Initialize with a demo user
users.set("demo@example.com", {
  email: "demo@example.com",
  password: "password123",
  name: "Demo User",
});

export async function hashPassword(password: string): Promise<string> {
  // In production, use bcrypt or similar
  // For demo, we'll just return the password (NOT SECURE)
  return password;
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  // In production, use bcrypt.compare()
  return password === hashedPassword;
}

export async function createUser(email: string, password: string, name: string): Promise<User | null> {
  if (users.has(email)) {
    return null; // User already exists
  }

  const hashedPassword = await hashPassword(password);
  users.set(email, { email, password: hashedPassword, name });

  return {
    id: email, // Using email as ID for simplicity
    email,
    name,
  };
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const user = users.get(email);

  if (!user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.password);

  if (!isValid) {
    return null;
  }

  return {
    id: email,
    email: user.email,
    name: user.name,
  };
}

export async function setAuthCookie(user: User) {
  const cookieStore = await cookies();
  // Store user data in cookie (in production, use encrypted JWT)
  cookieStore.set("user", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("user");
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    return null;
  }

  try {
    return JSON.parse(userCookie.value);
  } catch {
    return null;
  }
}
