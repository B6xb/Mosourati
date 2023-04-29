import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Content = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <Link href="/">
          <NavRoutes route="Recents" />
        </Link>
        <Link href="/user/personal">
          <NavRoutes route="Personal" />
        </Link>
        <Link href="" onClick={() => signOut()}>
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
const NavRoutes = ({ route, onClick }) => {
  return (
    <div onClick={onClick} className="navRoutes">
      {route}
    </div>
  );
};

export default Content;