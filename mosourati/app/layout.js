import "./styles/globals.css";

export const metadata = {
  title: "Mosourati",
  description: "a Galary for talented photoshooters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
