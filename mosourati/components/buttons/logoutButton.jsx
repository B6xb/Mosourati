"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const LogoutButton = () => {
  useSession();
  return (
    <div>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default LogoutButton;

// { redirect: false, callbackUrl: "/auth" }
