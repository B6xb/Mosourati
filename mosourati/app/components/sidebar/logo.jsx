"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Logo = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Link href="/user/recents">
        <div className="py-[50px]">
          <p className="navLogo text-center">{session.user.name}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href="/auth">
        <div className="py-[50px]">
          <p className="navLogo text-center">Log In</p>
        </div>
      </Link>
    );
  }
};

export default Logo;
