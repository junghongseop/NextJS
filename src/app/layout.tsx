// "use client";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
//import { useEffect, useState } from "react";
import { Control } from "./Control";
import React from "react";

// metadata는 서버 컴포넌트에서만 사용가능
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [topics, setTopics] = useState<any[]>([]);
  // useEffect(() => {
  //   fetch('http://localhost:9999/topics')
  //     .then((res: Response) => res.json())
  //     .then((result: any) => {
  //       setTopics(result);
  //     });
  // }, []);

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "topics", {
    cache: "no-store",
  }); // fetch 명령어만 사용하면 한번 가져온 정보를 저장함
  const topics = await res.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic: any) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
