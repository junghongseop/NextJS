  "use client";

  import { useParams, useRouter } from "next/navigation";
  import { FormEvent, useEffect, useState } from "react";

  export default function Update() {
      const [title, setTitle] = useState<string>();
      const [body, setBody] = useState<string>();
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    useEffect(() => {
      fetch("http://localhost:9999/topics/" + id)
        .then((res) => res.json())
        .then((result) => {
          setTitle(result.title);
          setBody(result.body);
        });
    }, [id]);
    return (
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault(); // onSubmit이 실행됐을 때의 기본 동작을 방지해줌
          // const title = event.target.title.value;
          // const body = event.target.body.value;

          const formData = new FormData(event.currentTarget);
          const title = formData.get("title") as String;
          const body = formData.get("body") as String;
          const options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
          };
          fetch(`http://localhost:9999/topics/`+id, options)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              const lastId = result.id;
              router.push(`/read/${lastId}`);
              router.refresh();
            });
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
        </p>
        <p>
          <textarea name="body" placeholder="content" value={body} onChange={e => setBody(e.target.value)}/>
        </p>
        <p>
          <input type="submit" value="update" />
        </p>
      </form>
    );
  }
