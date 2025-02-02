import Timeline from "./components/timeline/Timeline";
import Title from "../title/Title";
import style from "./AboutMe.module.scss";

interface Data {
  title: string;
  date: string;
  content?: string;
}

export default function AboutMe() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${year}.${month}`;

  const data: Data[] = [
    { title: "출생", date: "2000.03" },
    { title: "영천중학교 졸업", date: "2017.02" },
    { title: "영천고등학교 졸업", date: "2019.02" },
    { title: "정보처리기사 취득", date: "2024.09" },
    {
      title: "국립공주대학교 졸업",
      date: "2025.02",
      content: "컴퓨터공학부 소프트웨어전공",
    },
    {
      title: "입사 지원",
      date: formattedDate,
      content:
        "빠르게 변화하는 기술 환경 속에서도 끊임없이 학습하며, 팀과의 적극적인 협업을 통해 문제를 효율적으로 해결하는 개발자가 되겠습니다.",
    },
  ];

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
