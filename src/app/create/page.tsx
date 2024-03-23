"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // onSubmit이 실행됐을 때의 기본 동작을 방지해줌
        // const title = event.target.title.value;
        // const body = event.target.body.value;

        const formData = new FormData(event.currentTarget);
        const title = formData.get('title') as String;
        const body = formData.get('body') as String;
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics`, option)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastId = result.id;
            router.push(`/read/${lastId}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="content" />
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}

// page.js -> layout.js 없으면 create폴더의 page.js->src/layout.js를 찾아감
