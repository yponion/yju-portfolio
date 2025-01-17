import type { Metadata } from "next";
import "@/app/_styles/globals.scss";
import Nav from "@/app/_components/nav/Nav";
import Footer from "@/app/_components/footer/Footer";

export const metadata: Metadata = {
  title: "양정운 포트폴리오",
  description: "프론트 엔드 개발자 양정운 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
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
