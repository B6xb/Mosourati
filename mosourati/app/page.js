import dbConnect from "@/utils/db";

import ContentComp from "./components/content/contentComp";
export default function Home() {
  dbConnect();
  return (
    <main>
      <ContentComp />
    </main>
  );
}
