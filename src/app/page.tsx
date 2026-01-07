import { use } from "react";
import Main from "./_components/main/Main";
import AboutMe from "./_components/aboutme/AboutMe";
import Skills from "./_components/skills/Skills";
import Archiving from "./_components/archiving/Archiving";
import Projects from "./_components/projects/Projects";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function Page(props: { searchParams: SearchParams }) {
  const searchParams = use(props.searchParams);
  const company = searchParams.company;

  return (
    <>
      <Main />
      <AboutMe company={company} />
      <Skills />
      <Archiving />
      <Projects />
    </>
  );
}
