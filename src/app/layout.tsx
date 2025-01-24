import type { Metadata } from "next";
import "@/app/_styles/globals.scss";
import Nav from "@/app/_components/nav/Nav";
import Footer from "@/app/_components/footer/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "양정운 포트폴리오",
  description: "프론트 엔드 개발자 양정운 포트폴리오",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Suspense>{modal}</Suspense>
        <header>
          <nav>
            <Nav />
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
