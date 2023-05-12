"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import BackButton from "@/components/buttons/backButton";
import LikeButton from "@/components/buttons/likeButton";

const page = ({ params }) => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(true);

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  useEffect(() => {
    axios
      .get(`/api/posts/post?id=${params.id}`)
      .then((res) => {
        setPost(res.data);
        return axios.get(`/api/users/user?id=${res.data.userId}`);
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`/api/comments?id=${params.id}`).then((res) => {
      setComments(res.data);
      console.log(res.data);
    });
  }, []);

  const handleLike = (e) => {
    setLiked(!liked);
    console.log("parent Like Button Clicked");
  };

  const handleComment = async () => {
    const response = await axios.post("http://localhost:3000/api/comments", {
      text: comment,
      userId: session.user.id,
      postId: post.id,
    });
    console.log(response);
  };

  if (status === "loading") {
    return <p className="text-3xl flex flex-row justify-center">Loading....</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-10 pt-6">
      <Col>
        <Row className="pl-[10px]">
          <Image
            alt="img"
            className="rounded-sm"
            width={500}
            height={500}
            src={post.file}
          />
        </Row>
        <Row>
          <Row className="flex justify-between items-baseline ">
            <Col>
              <h1 className="font-extrabold text-xl py-5">{user.name}</h1>
            </Col>
            <Col className="">
              <LikeButton onClick={() => handleLike} />
            </Col>
          </Row>
          <Row>
            <h4>
              Reach to him:{"   "}
              <a className="font-bold text-xl" href={`mailto: ${user.email} `}>
                {user.email}
              </a>
            </h4>
          </Row>
        </Row>
        <Row>
          <BackButton />
        </Row>
      </Col>
      <Col className=" bg-stone-200 rounded-md h-[600px] flex flex-col justify-between  ">
        <Row className="">
          <Col>
            <Row>
              <h1 className="flex justify-center text-2xl pb-5">Comments</h1>
            </Row>
            <Row>
              {comments.map((c) => {
                return (
                  <Col className=" pl-5 border-b-slate-400 border-[1px]">
                    <Row className="flex">
                      <h1 className="font-bold ">{c.user.name}: </h1>
                      <h4 className="px-4">{c.text}</h4>
                    </Row>
                    <Row>
                      {" "}
                      <h6>
                        <a
                          className=" font-thin italic"
                          href={`mailto: ${c.user.email} `}
                        >
                          {c.user.email}
                        </a>
                      </h6>
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row className=" w-full">
          <form onSubmit={handleComment}>
            <input
              className=" min-w-full p-[5px] bg-stone-300"
              type="text"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="primaryBtn mt-0 flex flex-row justify-center">
              Send Comment
            </button>
          </form>
        </Row>
      </Col>
    </div>
  );
};

export default page;
