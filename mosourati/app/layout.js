import "./globals.css";
import MainPage from "./components/mainPage";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Mosourati",
  description: "a Galary for talented photoshooters",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MainPage children={children} />
      </body>
    </html>
  );
}
