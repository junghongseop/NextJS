import { useRouter } from "next/router";
// 지금은 /book/[id]로만 호출해야 정상작동함
// 좀 더 범용적으로 호출하고 싶다면 파일명을 [...id].tsx로 만들면 /book/[id]/[id]/[id]/...로 가능함
// 이 기능을 Catch All Segment라고 부름

// 이러면 /book으로 접속하면 404에러가 뜸
// 그렇다고 index.tsx 파일을 만들기 귀찮다면 [[...id]].tsx 파일로 만들면 /book, /book/[id], /book/[id]/[id]/...가 가능함
// 이 기능은 Optional Catch All Segment

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>book {id}</h1>;
};

export default BookDetailPage;
