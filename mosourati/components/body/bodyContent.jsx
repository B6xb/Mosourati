"use client";

import Navbar from "../sidebar/navbar";
import { Col, Row } from "react-bootstrap";
import TopSection from "../upperSection/topSection";
import { motion, useScroll } from "framer-motion";

const MainPage = (props) => {
  const { scrollYProgress } = useScroll();

  const children = props.children;
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Row>
        <Col>
          <Navbar />
        </Col>
        <Col className="pl-[300px] container h-screen">
          <TopSection />
          {children}
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
