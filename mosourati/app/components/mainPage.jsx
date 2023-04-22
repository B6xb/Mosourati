"use client";

import Navbar from "./navbar/navbar";
import { Col, Row } from "react-bootstrap";

const MainPage = (props) => {
  const children = props.children;
  return (
    <Row>
      <Col>
        <Navbar />
      </Col>
      <Col>{children}</Col>
    </Row>
  );
};

export default MainPage;
