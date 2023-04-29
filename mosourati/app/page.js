import ContentComp from "./components/content/contentComp";
import LogoutButton from "./components/buttons/logoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <LogoutButton />
    </main>
  );
  // if (session) {
  //   console.log("session available");
  //   return (
  //     <main>
  //       <ContentComp />
  //       <button onClick={() => signOut()}>Signout</button>
  //     </main>
  //   );
  // }
}
