import React from "react";

const Content = () => {
  return (
    <div>
      <NavRoutes route="Recents" />
      <NavRoutes route="Personal" />
    </div>
  );
};

// Routes component for Navbar
const NavRoutes = ({ route }) => {
  return <div className="navRoutes">{route}</div>;
};

export default Content;
