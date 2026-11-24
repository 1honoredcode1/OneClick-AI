"use client";

import { isAuthorized } from "@/lib/isAuthorized";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await isAuthorized();
        setEmail(user?.email ?? null);
      } catch (error) {
        console.error("Failed to read user session", error);
        setEmail(null);
      } finally {
        setLoading(false);
      }
    };
    void fetchUser();
  }, []);

  return [email, loading];
};
