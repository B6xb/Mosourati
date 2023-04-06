"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="py-[50px]">
      <p className="text-2xl font-bold">"User Name"</p>
    </div>
  );
};

export default Logo;
