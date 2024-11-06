import SearchLayout from "@/components/layouts/search-layout";
import { ReactNode } from "react";

export default function Home() {
  return <h1>index</h1>;
}

// JS의 모든 함수는 객체임
// 그래서 메서드를 추가 가능
Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
