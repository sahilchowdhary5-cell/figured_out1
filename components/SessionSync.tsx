"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAppStore } from "@/lib/store/appStore";

/**
 * Runs on every page load. If the authenticated user changes (or the stored
 * user ID doesn't match the current session), ALL local data is wiped before
 * the new user can see anything. This prevents data leaking between accounts.
 */
export default function SessionSync() {
  const { data: session, status } = useSession();
  const currentUserId = useAppStore((s) => s.currentUserId);
  const setCurrentUser = useAppStore((s) => s.setCurrentUser);
  const clearAllData = useAppStore((s) => s.clearAllData);

  useEffect(() => {
    if (status === "loading") return;

    const incomingUserId = session?.user?.id ?? null;
    if (!incomingUserId) return;

    if (currentUserId !== null && currentUserId !== incomingUserId) {
      // A different account just signed in — erase the previous user's data
      clearAllData();
    }

    setCurrentUser(incomingUserId);
  }, [session?.user?.id, status, currentUserId, setCurrentUser, clearAllData]);

  return null;
}
