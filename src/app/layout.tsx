import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LTD Software",
  description: "One stop solution for all your software needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
