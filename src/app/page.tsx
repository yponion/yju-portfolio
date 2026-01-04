import Main from "./_components/main/Main";
import AboutMe from "./_components/aboutme/AboutMe";
import Skills from "./_components/skills/Skills";
import Archiving from "./_components/archiving/Archiving";
import Projects from "./_components/projects/Projects";

type Params = Promise<{ company: string }>;

export default async function Page(params: Params) {
  const { company } = await params;
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
