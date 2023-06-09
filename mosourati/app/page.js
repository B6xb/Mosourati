import ContentComp from "../components/content/contentComp";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login", false);
  }

  return (
    <main>
      <ContentComp />
    </main>
  );
}
