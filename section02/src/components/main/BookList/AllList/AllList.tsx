import { BookData } from "@/types/main/type";
import Title from "../../Title/Title";
import ListItem from "../ListItem/ListItem";

const AllList = ({ allbooks }: { allbooks: BookData[] }) => {
  return (
    <section>
      <Title>등록된 모든 도서</Title>
      {allbooks.map((books) => (
        <ListItem key={books.id} {...books} />
      ))}
    </section>
  );
};

export default AllList;
