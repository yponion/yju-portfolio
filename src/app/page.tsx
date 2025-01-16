import style from "./page.module.scss";
import Main from "./_components/main/Main";
import AboutMe from "./_components/aboutme/AboutMe";

export default function Page() {
  return (
    <div className={style.container}>
      <Main />
      <AboutMe />
    </div>
  );
}
