import React from "react";
import Link from "next/link";
import { useSession, signOut, destroy } from "next-auth/react";

const Content = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <Link href={`/${session.user.name}/recents`}>
          <NavRoutes route="Recents" />
        </Link>
        <Link href={`/${session.user.name}/personal`}>
          <NavRoutes route="Personal" />
        </Link>
        <Link
          href=""
          onClick={() => signOut({ redirect: false, callbackUrl: "/login" })}
        >
          <NavRoutes route="Sign Out" />
        </Link>
      </div>
    );
  } else {
    return (
      <Link href="/">
        <NavRoutes route="Recents" />
      </Link>
    );
  }
};

// Routes component for Navbar
const NavRoutes = ({ route }) => {
  return <div className="navRoutes">{route}</div>;
};

export default Content;
