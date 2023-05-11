"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import BackButton from "@/components/buttons/backButton";

const page = ({ params }) => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/api/posts/post?id=${params.id}`)
      .then((res) => {
        setPost(res.data);
        console.log("Post is:" + post);
        return axios.get(`/api/users/user?id=${res.data.userId}`);
      })
      .then((res) => {
        setUser(res.data);
        console.log("User is:" + user);
      });
  }, []);

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if (status === "loading") {
    return <p className="text-3xl flex flex-row justify-center">Loading....</p>;
  }

  return (
    <div className="flex justify-center capitalize p">
      <Col>
        <Row>
          <Image width={300} height={400} src={post.file} />
        </Row>
        <Row>
          <h1 className="font-extrabold text-xl py-5">{user.name}</h1>

          <h4>
            Reach to him:{"   "}
            <a className="font-bold text-xl" href={`mailto: ${user.email} `}>
              {user.email}
            </a>
          </h4>
        </Row>
        <Row>
          <BackButton />
        </Row>
      </Col>
    </div>
  );
};

export default page;
