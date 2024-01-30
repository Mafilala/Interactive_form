import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Intractive card detail form",
  description: "Created by Maruf.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
