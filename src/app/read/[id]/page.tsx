import React from "react";

export default async function Read(props: any) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL  + `topics/${props.params.id}`, {cache: 'no-store'});
  const topics = await res.json();
  return (
    <>
      <h2>{topics.title}</h2>
      {topics.body}
    </>
  );
}
