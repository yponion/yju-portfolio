"use client";

import style from "./Timeline.module.scss";

interface Props {
  data: { title: string; date?: string; content?: string };
  isEnd: boolean;
}

export default function Timeline({ data, isEnd }: Props) {
  const setContents = () => {
    return (
      <>
        <h1>{data.title}</h1>
        {data.date ? <small>{data.date}</small> : null}
        {data.content ? <p>{data.content}</p> : null}
      </>
    );
  };
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.lineContaier}>
          <div className={style.dot}></div>
          {isEnd ? null : <div className={style.line} />}
        </div>
        <div className={style.content}>{setContents()}</div>
      </div>
    </div>
  );
}
