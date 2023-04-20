"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="py-[50px]">
        <p className="navLogo">"User Name"</p>
      </div>
    </Link>
  );
};

export default Logo;
