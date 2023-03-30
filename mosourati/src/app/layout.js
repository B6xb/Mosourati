import "./styles/globals.css";

export const metadata = {
  title: "Mosourati",
  description: "THE gallery of talented",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
