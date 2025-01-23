import Title from "../title/Title";
import style from "./Projects.module.scss";
import type { Project } from "@/app/_types/Project";
import Card from "./components/card/Card";

const data: Project[] = [
  {
    title: "yju-portfolio",
    skills: ["Next.js", "TypeScript", "Sass"],
    src: process.env.NEXT_PUBLIC_BASE_URL as string,
    images: [],
    date: "2025.01-2025.02",
    headcount: 1,
    introduce:
      "나만의 포트폴리오를 위한 웹사이트 제작. 모션 라이브러리 없이 직접 JS 또는 CSS로 구현",
    github: "https://github.com/yponion/yju-portfolio",
  },
  {
    title: "Qcraft",
    skills: ["React", "TypeScript", "Redux"],
    src: "/qcraft.png",
    images: [],
    date: "2024.09-2024.12",
    headcount: 2,
    introduce: "AI 가상 인터뷰. Web Speech API를 활용해 음성답변 기능 구현",
    github: "https://github.com/Capstone-QCraft/client",
  },
  {
    title: "Project Pulse BE",
    skills: ["Node.js", "JavaScript", "MongoDB"],
    src: "/project-pulse-be.png",
    images: [],
    date: "2024.04",
    headcount: 1,
    introduce:
      "프로젝트 관리 웹사이트. 기존 팀프로젝트 ProjectManagement의 Backend 부분을 직접 구현",
    github: "https://github.com/yponion/ProjectManagement",
  },
  {
    title: "Project Pulse FE",
    skills: ["React", "JavaScript", "Redux"],
    src: "/project-pulse-fe.png",
    images: [],
    date: "2023.11-2024.12",
    headcount: 2,
    introduce: "프로젝트 관리 웹사이트.",
    github: "https://github.com/yponion/ProjectManagement",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className={style.container}>
      <Title title="Projects" />
      <div className={style.wrapper}>
        <div className={style.inner}>
          {data.map((v) => (
            <Card key={v.title} project={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
