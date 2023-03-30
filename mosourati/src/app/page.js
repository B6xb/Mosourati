import React from "react";
import MosouratiNavBar from "@/app/components/MosouratiNavBar";
import { connectToDatabase } from "./utils/db";

export default function Home() {
  connectToDatabase();
  return (
    <main className="flex flex-row ">
      <nav className="basis-1/3">
        <MosouratiNavBar />
      </nav>
      <section>
        <h1 className="">
          My name is <strong>Bander !!!</strong>
        </h1>
      </section>
    </main>
  );
}
