import Container from "../container";
import Logo from "./logo";
import Content from "./content";

const Navbar = () => {
  return (
    <div className="fixed w-[300px] h-screen flex flex-col items-center justify-center">
      <Container>
        <Logo />
        <Content />
      </Container>
    </div>
  );
};

export default Navbar;
