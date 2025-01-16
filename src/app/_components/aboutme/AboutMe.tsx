import Title from "../title/Title";
import style from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={style.container}>
      <Title title="AboutMe" />
    </div>
  );
}
