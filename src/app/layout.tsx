import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NMIXX FANS",
  description: "Welcome To NMIXX FANS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        안녕하세요!
      </body>
    </html>
  );
}
