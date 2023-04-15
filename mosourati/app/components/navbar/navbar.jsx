import Container from "../container";
import Logo from "./logo";
import Content from "./content";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-[300px] m-0 h-screen flex flex-col items-center justify-center shadow-sm">
      <Container>
        <Logo />
        <Content />
      </Container>
    </div>
  );
};

export default Navbar;
