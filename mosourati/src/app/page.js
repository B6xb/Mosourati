"use client";

import React from "react";
import MosouratiNavBar from "@/components/MosouratiNavBar";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <main className="flex flex-row">
      <MosouratiNavBar />
      <Container>
        <h1 className="">
          My name is <strong>Bander !!!</strong>
        </h1>
      </Container>
    </main>
  );
}
