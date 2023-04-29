"use client";
import { Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import { useSession, signOut, signIn } from "next-auth/react";

const LoginPage = () => {
  const email = useRef("");
  const password = useRef("");

  const { data: session } = useSession();

  const onSubmit = async () => {
    const res = await fetch(
      `https://localhost:3000/users/user?email=${email}&password=${password}`
    );
  };
  return (
    <Container>
      <Col className=" flex flex-col items-center ">
        <InputComp placeholder="Mosourati@mosourati.sa" label="Email" />
        <InputComp placeholder="*******" label="Password" />
        <button
          className="bg-white border-grey px-[10px] text-sm rounded-md mt-[10px]"
          onClick={onSubmit()}
        >
          Sign In
        </button>
      </Col>
    </Container>
  );
};

const InputComp = (props) => {
  const { label, placeholder } = props;
  return (
    <Row>
      <label htmlFor="">{label} </label>
      <input
        className="border-[1px] border-grey rounded-sm text-xs w-[200px] h-[20px]"
        placeholder={placeholder}
      />
    </Row>
  );
};

export default LoginPage;
