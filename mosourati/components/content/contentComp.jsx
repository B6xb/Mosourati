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
    <div className="flex flex-row justify-between p-5 ">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <ImageComp id={post.id} src={post.file} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default ContentComp;
