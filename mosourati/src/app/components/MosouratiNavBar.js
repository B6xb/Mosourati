import { Nav, Navbar, Container } from "react-bootstrap";

const MosouratiNavBar = () => {
  return (
    <Navbar className="basis-1/3 flex flex-row">
      <Container className="align-middle">
        <Navbar.Brand href="#home">Bander Almutairi</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link>default</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MosouratiNavBar;
