import style from "./Main.module.scss";

export default function Main() {
  return (
    <section className={style.container}>
      <div className={style.titleWrapper}>
        <h1>- 양정운 -</h1>
        <h1>프론트 엔드 개발자 포트폴리오</h1>
        <hr />
        <h2>
          반응형 UI를 즐기고, UX를 중시하는 프론트 엔드 개발자 양정운 입니다.
        </h2>
      </div>
      <div className={style.contactWrapper}>
        <h1 className={style.contactTitle}>Contact</h1>
        <div className={style.contactContent}>
          <h2>{process.env.NEXT_PUBLIC_EMAIL}</h2>
          <h2>{process.env.NEXT_PUBLIC_Phone}</h2>
        </div>
      </div>
    </section>
  );
}
