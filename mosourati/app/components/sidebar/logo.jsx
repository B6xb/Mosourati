"use client";

import Link from "next/link";

const Logo = (props) => {
  const { name, onClick } = props;
  return (
    // <Link href={route}>
    <div className="py-[50px]" onClick={onClick}>
      <p className="navLogo">{name}</p>
    </div>
    // </Link>
  );
};

export default Logo;
