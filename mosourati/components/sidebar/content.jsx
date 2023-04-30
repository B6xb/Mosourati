import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoutButton from "../buttons/logoutButton";

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
        <NavRoutes route={<LogoutButton />} />
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
