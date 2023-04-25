import React from "react";
import Link from "next/link";

const Content = () => {
  return (
    <div>
      <Link href="/user/recents">
        <NavRoutes route="Recents" />
      </Link>
      <Link href="/user/personal">
        <NavRoutes route="Personal" />
      </Link>
    </div>
  );
};

// Routes component for Navbar
const NavRoutes = ({ route }) => {
  return <div className="navRoutes">{route}</div>;
};

export default Content;
