import SearchLayout from "@/components/layouts/search-layout";
import { ReactNode } from "react";
import books from "@/mocks/books.json";
import ListItem from "@/components/main/BookList/ListItem/ListItem";

// navigation은 App Router에서 사용함.
// Page Router에서 사용하면 호환성 문제가 생길 수 있어 권장하지 않음
// import { useRouter } from "next/navigation";

const SearchPage = () => {
  return (
    <div>
      {books.map((books) => (
        <ListItem key={books.id} {...books} />
      ))}
    </div>
  );
};

export default SearchPage;

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
