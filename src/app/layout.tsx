import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Rbody Clinic — Lagos Recovery & Body Clinic",
  description:
    "Rbody is a specialist clinic for lymphatic drainage massage, post-surgical recovery care, body sculpting, lipolysis, IV therapy and medical weight-loss support in Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <Header />
        {children}
      </body>
    </html>
  );
}
