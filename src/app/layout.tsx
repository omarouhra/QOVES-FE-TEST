import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "QOVES Frontend Test",
  description:
    "We give customers honest and realistic beauty advice on physical looks using scientific literature and a multidisciplinary approach to aesthetics.",
};

// Correct font loading with Next.js 15
const zagma = localFont({
  src: "./fonts/zagma/book.otf",
  display: "swap",
});

const ppNeueMontreal = localFont({
  src: [
    { path: "./fonts/PP_Neue_Montereal/thin.otf", weight: "200" },
    { path: "./fonts/PP_Neue_Montereal/book.otf", weight: "400" },
    { path: "./fonts/PP_Neue_Montereal/medium.otf", weight: "500" },
    { path: "./fonts/PP_Neue_Montereal/bold.otf", weight: "700" },
  ],
  display: "swap",
});

// ✅ Apply fonts using `className`
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* No need for manual CSS variables */}
      <body className={`${ppNeueMontreal.className} ${zagma.className}`}>
        <main className="max-w-[1080px] mx-auto p-2 xl:p-0">{children}</main>
      </body>
    </html>
  );
}
