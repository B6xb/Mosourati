"use client";

import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import ImageComp from "./image/imgComp";

const ContentComp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="flex flex-row justify-between p-5">
      {posts.map((post) => (
        <ImageComp src={post.file} key={post.id} />
      ))}
    </div>
  );
};

export default ContentComp;
