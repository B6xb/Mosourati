"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Input from "../../components/input/input";

const Auth = () => {
  const { data: session } = useSession();
  const [loginError, setLoginError] = useState(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      const { error } = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/",
      });
      console.log(error);
      setLoginError(error);
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      if (name === "" || email === "" || password === "") {
        setLoginError("Missign Credintals ...");
        throw new Error("Enter full Credentials");
      }
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
  if (!session) {
    return (
      <div className="flex justify-center h-screen">
        <div className=" p-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className=" text-4xl mb-8 font-semibold">
            {variant === "login" ? "Sign in" : "Register"}
          </h2>
          <h1 className="text-red-500 italic">{loginError}</h1>
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
  }
};

export default Auth;
