import Account from "../../../models/account";

export async function GET(request) {
  try {
    const res = await request.json();

    // const account = await Account.find(res.username);

    return Response.json(res, { status: 200 });
  } catch (error) {
    return new Response(error, { status: 400, success: false });
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
  try {
    const res = await request.json();
    // const account = await Account.create(res.body);

    // console.log(account);
    return Response.json(res, { status: 200 });
  } catch (error) {
    return new Response(error, { status: 400, success: false });
  }
}
