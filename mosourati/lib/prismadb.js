import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;

// import { PrismaClient } from "@prisma/client";

// const client = global;
// client.prismadb = client.prismadb || new PrismaClient({ log: ["query"] });
// const prismadb = client.prismadb;

// if (process.env.NODE_ENV !== "production") {
//   client.prismadb = prismadb;
// }

// export default client;
