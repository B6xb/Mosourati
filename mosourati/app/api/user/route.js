import Account from "../../../models/account";

export async function GET(request) {
  try {
    const res = await request.json();

    // const account = await Account.find(res.username);

    return new Response.json({ res }, { status: 200 });
  } catch (error) {
    return new Response("GET Error!", { status: 400, success: false });
  }
}

// export async function POST(req) {
//   try {
//     const account = await Account.create(req.body);
//     new Response("Hello POST User", {
//       status: 200,
//       success: true,
//       data: account,
//     });
//   } catch (error) {
//     new Response("POST Error !", { status: 400, success: false });
//   }
// }

export async function POST(request) {
  const res = await request.json();
  console.log(res.username);
  return Response.json({ res }, { status: 200 });
}
