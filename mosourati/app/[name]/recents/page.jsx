"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = () => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if (status === "loading") {
    return <p className="text-3xl flex flex-row justify-center">Loading....</p>;
  }

  return (
    <div className="flex justify-center capitalize">
      <h1>{session.user.name}, This is Your RECENTS</h1>
    </div>
  );
};

export default page;
