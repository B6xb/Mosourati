"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const page = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth");
    },
  });
  const { data: session } = useSession();

  if (status === "loading") {
    return <p className="text-3xl flex flex-row justify-center">Loading....</p>;
  }

  return (
    <div className="flex justify-center capitalize flex-col">
      <h1 className="flex justify-center">
        {session.user.name}, This is Your PERSONAL{" "}
      </h1>
    </div>
  );
};

export default page;
