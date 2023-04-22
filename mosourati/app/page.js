import dbConnect from "@/utils/db";

export default function Home() {
  dbConnect();
  return <main>{}</main>;
}
