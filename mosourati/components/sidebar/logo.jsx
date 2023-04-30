"use client";

import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

const Logo = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Link href="/">
        <div className="py-[50px]">
          <p className="navLogo text-center capitalize">{session.user.name}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href="" onClick={() => signIn()}>
        <div className="py-[50px]">
          <p className="navLogo text-center">Log In</p>
        </div>
      </Link>
    );
  }
};

export default Logo;
