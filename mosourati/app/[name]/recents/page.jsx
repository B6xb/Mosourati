"use client";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex justify-center capitalize">
        <h1>{session.user.name},This is Your RECENTS</h1>
      </div>
    );
  }
};

export default page;
