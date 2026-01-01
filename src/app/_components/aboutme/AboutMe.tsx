"use client";

import Timeline from "./components/timeline/Timeline";
import Title from "../title/Title";
import style from "./AboutMe.module.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Data {
  title: string;
  date: string;
  content?: string;
}

export default function AboutMe() {
  const searchParams = useSearchParams();
  const company = searchParams.get("company");

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${year}.${month}`;

  const [data, setData] = useState<Data[]>([
    { title: "출생", date: "2000.03" },
    { title: "영천고등학교 졸업", date: "2019.02", content: "과학중점 고등학교" },
    { title: "정보처리기사 취득", date: "2024.09" },
    {
      title: "국립공주대학교 졸업",
      date: "2025.02",
      content: "컴퓨터공학부 소프트웨어전공",
    },
    {
      title: "딥세일즈 인턴",
      date: "2025.04 ~ 2025.10",
      content:
        "Frontend 개발 실무 투입.\n\n1.	디자인 시스템 동기화\nFigma 디자인 문서와 실제 구현 간의 불일치 요소를 식별·해결하여 UI 일관성을 개선하고, 향후 발생 가능한 이슈를 사전에 방지했습니다. 디자인 시스템을 shadcn/ui 기반으로 통일하는 리팩토링을 진행했습니다.\n\n2. 성능 최적화\n불필요한 리렌더링을 제거하고, React Query의 잘못된 사용으로 인해 캐싱되지 않고 반복 요청되던 로직을 수정하여 네트워크 비용을 절감했습니다. 또한 약 1만 줄 규모의 Dead Code를 정리하여 코드베이스의 가독성과 유지보수성을 향상시켰습니다.\n\n3. 기능 개발\nToss Payments 연동 및 신규 페이지 개발을 담당하여 서비스 기능 확장을 지원했습니다.\n\n4. 유지보수 및 QA 대응\n다수의 QA 이슈를 처리하며 서비스 전반의 버그를 수정하고 안정성을 개선했습니다.",
    },
  ]);

  useEffect(() => {
    if (company) {
      setData([...data, { title: `${company} 지원`, date: formattedDate }]);
    }
  }, [company]);

  data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <section id="AboutMe" className={style.container}>
      <Title title="AboutMe" />
      <div className={style.wrapper}>
        {data.map((v, i) => (
          <Timeline key={i} data={v} isEnd={i === data.length - 1} />
        ))}
      </div>
    </section>
  );
}
