import style from "./page.module.scss";
import Main from "./_components/main/Main";
import AboutMe from "./_components/aboutme/AboutMe";
import Test from "./_components/test/Test";

export default function Page() {
  return (
    <div className={style.container}>
      <Main />
      <AboutMe />
      <Test />
    </div>
  );
}
