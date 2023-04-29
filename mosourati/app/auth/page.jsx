"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/input/input";

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const { data: session } = useSession();

  if (session) {
    router.push("/");
    return null;
  }

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push(`/${email}/recents`);
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="flex justify-center h-screen">
      <div className=" p-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className=" text-4xl mb-8 font-semibold">
          {variant === "login" ? "Sign in" : "Register"}
        </h2>
        <div className="flex flex-col gap-4">
          {variant === "register" && (
            <Input
              id="name"
              type="text"
              label="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <Input
            id="email"
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={variant === "login" ? login : register}
          className="bg-bgThird py-3 rounded-md w-full mt-10 hover:bg-hovering hover:text-bgPrimary"
        >
          {variant === "login" ? "Login" : "Sign up"}
        </button>
        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
          <div
            onClick={() => signIn("google", { callbackUrl: "/profiles" })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FcGoogle size={32} />
          </div>
        </div>
        <p className="text-neutral-500 mt-12">
          {variant === "login"
            ? "First time using Mosourati?"
            : "Already have an account?"}
          <span
            onClick={toggleVariant}
            className="text-primray ml-1 hover:underline cursor-pointer"
          >
            {variant === "login" ? "Create an account" : "Login"}
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Auth;
