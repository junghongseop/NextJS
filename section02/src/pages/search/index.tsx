import { useRouter } from "next/router";

// navigation은 App Router에서 사용함.
// Page Router에서 사용하면 호환성 문제가 생길 수 있어 권장하지 않음
// import { useRouter } from "next/navigation";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return <h1>search {q}</h1>;
};

export default SearchPage;
