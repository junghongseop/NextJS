import SearchLayout from "@/components/layouts/search-layout";
import { ReactNode } from "react";
import BookList from "@/components/main/BookList/BookList";
import { InferGetServerSidePropsType } from "next";

// getServerSideProps는 index 페이지를 요청했을 때 Home 컴포넌트보다 먼저 실행됨

// 1. 브라우저로 부터 해당 페이지가 요청이 들어왔을 때
// 2. getServerSideProps 함수가 먼저 실행해서 서버로 부터 데이터를 불러오는 등의 동작을 함
// 3. Home과 같은 함수들이 실행되게 됨

// 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
// 해당 함수는 사전 렌더링이 발생하는 과정에서 한번만 실행됨
export const getServerSideProps = () => {
  // 해당 함수는 서버 측에서만 실행되기 때문에 콘솔에 나타나지 않음
  console.log("server side function");

  const data = "hello";

  return {
    props: {
      data,
    },
  };
};

export default function Home(
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(data);

  return <BookList />;
}

// JS의 모든 함수는 객체임
// 그래서 메서드를 추가 가능
Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
