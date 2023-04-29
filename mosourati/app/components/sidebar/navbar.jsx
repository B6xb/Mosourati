"use client";

import Container from "./container";
import Logo from "./logo";
import { signIn, useSession } from "next-auth/react";
import Content from "./content";

const Navbar = () => {
  let name = "Log In";
  const { data: session } = useSession();
  if (session) {
    name = "Logged In";
  } else {
  }
  return (
    <div className="sideBar">
      <Container>
        <Logo onClick={signIn} name={name} />
        <Content />
      </Container>
    </div>
  );
};

export default Navbar;
