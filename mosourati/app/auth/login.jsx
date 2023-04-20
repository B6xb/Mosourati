import { Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";

const LoginPage = () => {
  const userName = useRef("");
  const password = useRef("");

  const onSubmit = () => {};
  return (
    <Container>
      <Col>
        <Row></Row> <Row></Row>
      </Col>
    </Container>
  );
};

export default LoginPage;
