import serverAuth from "@/lib/serverAuth";

export default async function GET(request) {
  try {
    const { currentUser } = await serverAuth(request);

    return Response.json(currentUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response({ status: 400 });
  }
}
