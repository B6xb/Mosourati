"use client";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <h1>{pathname},This is Your RECENTS</h1>
    </div>
  );
};

export default page;
