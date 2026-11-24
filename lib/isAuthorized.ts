"use server";

import { cookies } from "next/headers";

interface UserSession {
  email: string;
  organization_id: string;
}

export const isAuthorized = async (): Promise<UserSession | null> => {
  const sessionValue = (await cookies()).get("user_session")?.value;

  if (!sessionValue) {
    return null;
  }

  try {
    const session: unknown = JSON.parse(sessionValue);

    if (
      typeof session !== "object" ||
      session === null ||
      !("email" in session) ||
      typeof session.email !== "string" ||
      !("organization_id" in session) ||
      typeof session.organization_id !== "string"
    ) {
      console.error("Invalid user session payload");
      return null;
    }

    return {
      email: session.email,
      organization_id: session.organization_id,
    };
  } catch (error) {
    console.error("Failed to parse user session", error);
    return null;
  }
};
