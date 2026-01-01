import Main from "./_components/main/Main";
import AboutMe from "./_components/aboutme/AboutMe";
import Skills from "./_components/skills/Skills";
import Archiving from "./_components/archiving/Archiving";
import Projects from "./_components/projects/Projects";

export default async function Page({ searchParams }: { searchParams: { company?: string } }) {
  const { company } = searchParams;
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
