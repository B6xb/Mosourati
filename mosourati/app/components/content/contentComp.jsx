"use client";

import React from "react";
import Image from "next/image";

const ContentComp = () => {
  return (
    <div className="flex flex-row justify-between p-5">
      <ImageComp src="/../public/1.jpeg" context="Saudi Eid" />
      <ImageComp src="/../public/2.jpeg" context="Cozy Nights" />
      <ImageComp src="/../public/3.jpeg" context="Love" />
    </div>
  );
};

const ImageComp = (props) => {
  const { src, context } = props;
  return (
    <div className="p-[50px]">
      <Image width={300} height={100} className="imgComp" src={src} />
      <h1 className="photoHeader">{context}</h1>
    </div>
  );
};

export default ContentComp;
