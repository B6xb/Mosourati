import ContentComp from "../components/content/contentComp";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth", false);
  }

  return (
    <main>
      <ContentComp />
    </main>
  );
}
