"use client";

import "./globals.css";
import MainPage from "./components/body/bodyContent";
import { NextAuthProvider } from "./providers";

import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-bgPrimary text-primray `}>
        <NextAuthProvider session={session}>
          <MainPage>{children}</MainPage>
        </NextAuthProvider>
      </body>
    </html>
  );
}
