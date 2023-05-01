import "./globals.css";
import MainPage from "../components/body/bodyContent";
import { NextAuthProvider } from "./providers";

import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-bgPrimary text-primray `}>
        <NextAuthProvider>
          <MainPage>{children}</MainPage>
        </NextAuthProvider>
      </body>
    </html>
  );
}
