"use client";

import Navbar from "../sidebar/navbar";
import { Col, Row } from "react-bootstrap";
import TopSection from "../upperSection/topSection";

const MainPage = (props) => {
  const children = props.children;
  return (
    <Row>
      <Col>
        <Navbar />
      </Col>
      <Col className="pl-[300px] container">
        <TopSection />
        {children}
      </Col>
    </Row>
  );
};

export default MainPage;
