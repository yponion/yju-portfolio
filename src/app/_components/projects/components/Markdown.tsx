"use client";

import getReadme from "@/app/_services/getReadme";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useEffect, useState } from "react";

interface Props {
  owner: string;
  repo: string;
}

export default function Markdown({ owner, repo }: Props) {
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchReadme() {
      const readme = await getReadme(owner, repo);
      setText(readme ?? "");
    }

    fetchReadme();
  }, [owner, repo]);

  return <MarkdownPreview source={text} />;
}
