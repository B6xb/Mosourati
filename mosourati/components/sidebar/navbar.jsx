import Container from "./container";
import Logo from "./logo";

import Content from "./content";

const Navbar = () => {
  return (
    <div className="sideBar">
      <Container>
        <Logo />
        <Content />
      </Container>
    </div>
  );
};

export default Navbar;
