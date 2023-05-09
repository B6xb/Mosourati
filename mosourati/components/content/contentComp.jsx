"use client";

import React from "react";
import Image from "next/image";
import axios from "axios";

const getPosts = async () => {
  const res = await axios.get("http://localhost:3000/posts");
  console.log(res);
  return res.json();
};
const ContentComp = () => {
  getPosts();
  return <div className="flex flex-row justify-between p-5"></div>;
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
