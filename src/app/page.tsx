import style from "./page.module.scss";
import Main from "./_components/main/Main";
import AboutMe from "./_components/aboutme/AboutMe";
import Skills from "./_components/skills/Skills";
import Archiving from "./_components/archiving/Archiving";
import Projects from "./_components/projects/Projects";

export default function Page() {
  return (
    <div className={style.container}>
      <Main />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
    </div>
  );
}
