import Link from "next/link";
import style from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>
        주소가 잘못 입력되었거나, 페이지가 변경 혹은 삭제되어 요청하신 페이지를
        찾을 수 없습니다.
      </p>
      <Link href="/">
        <button>홈페이지로</button>
      </Link>
    </div>
  );
}
