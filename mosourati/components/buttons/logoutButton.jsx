"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
};

export default LogoutButton;
