import type { Metadata } from "next";
import "./globals.scss";
import style from "./layout.module.scss";
import NavMunu from "./_components/NavMenu";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "양정운 포트폴리오",
  description: "FE 개발자 양정운 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.root}>
          <header className={style.nav}>
            <NavMunu />
          </header>
          <div className={style.content}>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
