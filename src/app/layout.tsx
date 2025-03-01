import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";


export const metadata: Metadata = {
  title: "QOVES Frontend Test",
  description: "We give customers honest and realistic beauty advice on physical looks using scientific literature and a multidisciplinary approach to aesthetics.",
};

const zagma = localFont({ src: "./fonts/zagma/Book.otf" });

const PpNeueMonteral = localFont({
  src: [
    {
      path: "./fonts/PP_Neue_Montereal/book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PP_Neue_Montereal/thin.otf",
      weight: "200",
      style: "thin",
    },
    {
      path: "./fonts/PP_Neue_Montereal/medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/PP_Neue_Montereal/semibold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/PP_Neue_Montereal/bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PpNeueMonteral.className} ${zagma.className}`}
      >
        {children}
      </body>
    </html>
  );
}
