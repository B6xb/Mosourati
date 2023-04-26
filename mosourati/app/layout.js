"use client";

import "./globals.css";
import MainPage from "./components/body/bodyContent";
import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-bgPrimary text-primray `}>
        <SessionProvider session={session}>
          <MainPage>{children}</MainPage>
        </SessionProvider>
      </body>
    </html>
  );
}
