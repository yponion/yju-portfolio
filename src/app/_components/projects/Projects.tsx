import Title from "../title/Title";
import style from "./Projects.module.scss";
import type { Project } from "@/app/_types/Project";
import Card from "./components/card/Card";

const data: Project[] = [
  {
    title: "Transfer",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "React Native webview"],
    src: "/transfer/d-01.png",
    images: [
      "/transfer/d-01.png",
      "/transfer/d-02.png",
      "/transfer/d-03.png",
      "/transfer/m-01.PNG",
      "/transfer/m-02.PNG",
      "/transfer/m-03.PNG",
      "/transfer/m-04.PNG",
    ],
    date: "2025.02",
    headcount: 1,
    introduce: `기차 환승

- 기차를 환승 할 때 두번 이상 환승하는 경로는 볼 수 없었다. 하지만 두번 이상 환승하면 더 효율적인 동선을 짤 수 있다는 것을 안 나는 직접 사용할 서비스를 제작하기로 했다.

- 공공데이터를 활용해 일정을 효율적으로 작성가능.

- 타임라인을 통해 구성한 일정을 한눈에 알아보기 쉬움.

- 반응형으로 모바일웹에서도 사용가능 및 웹뷰로 React Native 앱에 탑재
  onMessage를 이용해 웹뷰 <-> React Native 간 통신`,
    github: "https://github.com/yponion/transfer",
  },
  {
    title: "yju-portfolio",
    skills: ["Next.js", "TypeScript", "Sass"],
    src: process.env.NEXT_PUBLIC_BASE_URL as string,
    images: [
      "/portfolio/d1.png",
      "/portfolio/d2.png",
      "/portfolio/d3.png",
      "/portfolio/d4.png",
      "/portfolio/d5.png",
      "/portfolio/m1.jpg",
      "/portfolio/m2.jpg",
      "/portfolio/m3.jpg",
      "/portfolio/m4.jpg",
      "/portfolio/m5.jpg",
      "/portfolio/m6.jpg",
    ],
    date: "2025.01",
    headcount: 1,
    introduce: `프론트엔드 개발자로서 역량을 효과적으로 보여줄 수 있는 방법을 고민한 끝에, 웹사이트 형태의 포트폴리오를 제작하였다.

- Next.js를 사용하여 SSR과 SSR을 적절히 혼합.
- 화면 크기와 시스템 컬러 모드에 따른 반응형 디자인을 중심으로 웹사이트를 설계하고 구현.
- 스타일링은 Sass를 사용해 직관적이고 효율적으로 구현.
  - if 문과 for 문 등을 이용하여 애니메이션을 하드코딩 없이 구현.
- framer-motion와 같은 라이브러리를 사용하지 않고 JS와 CSS로 직접 애니메이션 구현.
- Zustand를 이용한 상태관리.
- react-qr-code을 이용하여 연락처 QR코드로 생성.
- swiper를 이용하여 이미지 무한크롤을 간단하게 구현.`,
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
    
- 자기소개서, 입사지원서 따위의 pdf, docs, hwp 파일을 입력하면 AI가 분석하여 면접 예상 질문을 뽑아주고 답변에대한 피드백 까지 해주는 웹 애플리케이션.
- Web Speech API를 활용해 음성답변 기능 구현.

- 현재 Claude API 등 과금 문제로 Backend server는 내려가있음.`,
    github: "https://github.com/Capstone-QCraft/client",
  },
  {
    title: "Project Pulse BE",
    skills: ["Express", "JavaScript", "MongoDB"],
    src: "/project-pulse-be.png",
    images: [],
    date: "2024.04",
    headcount: 1,
    introduce: `프로젝트 관리 웹사이트.
    
- 기존 팀프로젝트 ProjectManagement의 Backend 부분을 Express와 MongoDB를 이용하여 직접 구현하며 Backend에 대한 이해도 상승.`,
    github: "https://github.com/yponion/ProjectManagement",
  },
  {
    title: "Project Pulse FE",
    skills: ["React", "JavaScript", "Redux"],
    src: "/project-pulse-fe.png",
    images: [],
    date: "2023.11 - 2024.12",
    headcount: 2,
    introduce: `프로젝트 관리 웹사이트.
    
- 본격적인 웹 개발 입문.
  - 기존 HTML, CSS, JS 를 이용하여 화면을 구성하는 것에 흥미를 느껴 React를 이용하여 웹 개발에 도전.
- Redux를 통한 상태관리.
  - 새로고침 시 데이터가 초기화 되는 것을 몰라 고생좀 하였다.`,
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
