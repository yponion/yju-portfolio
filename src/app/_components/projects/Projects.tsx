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
    date: "2025.01",
    headcount: 1,
    introduce: `나만의 포트폴리오를 위한 웹사이트 제작.

모션 라이브러리 없이 직접 JS 또는 CSS로 구현.
Sass를 이용하여 스타일링.
Zustand를 이용한 상태관리.
react-qr-code을 이용하여 연락처 QR코드로 생성.
swiper를 이용하여 이미지 무한크롤을 간단하게 구현.`,
    github: "https://github.com/yponion/yju-portfolio",
  },
  {
    title: "Qcraft",
    skills: ["React", "TypeScript", "Redux"],
    src: "/qcraft.png",
    images: [
      "/qcraft/main-desktop-light.png",
      "/qcraft/interview-desktop-light.png",
      "/qcraft/review-desktop-dark.png",
      "/qcraft/history-mobile-light.png",
      "/qcraft/signup-mobile-dark.png",
    ],
    date: "2024.09 - 2024.12",
    headcount: 2,
    introduce: `AI 가상 인터뷰.
    
자기소개서, 입사지원서 따위의 pdf, docs, hwp 파일을 입력하면 AI가 분석하여 면접 예상 질문을 뽑아주고 답변에대한 피드백 까지 해주는 웹 애플리케이션.
Web Speech API를 활용해 음성답변 기능 구현.

현재 Claude API 등 과금 문제로 Backend server는 내려가있음.`,
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
      "프로젝트 관리 웹사이트.\n\n기존 팀프로젝트 ProjectManagement의 Backend 부분을 Node.js와 MongoDB를 이용하여 직접 구현하며 Backend에 대한 이해도 상승.",
    github: "https://github.com/yponion/ProjectManagement",
  },
  {
    title: "Project Pulse FE",
    skills: ["React", "JavaScript", "Redux"],
    src: "/project-pulse-fe.png",
    images: [],
    date: "2023.11 - 2024.12",
    headcount: 2,
    introduce: "프로젝트 관리 웹사이트.\n\n본격적인 웹 개발 입문.",
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
