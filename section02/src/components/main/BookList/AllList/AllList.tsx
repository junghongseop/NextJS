import Title from "../../Title/Title";
import books from "@/mocks/books.json";
import ListItem from "../ListItem/ListItem";

const AllList = () => {
  return (
    <section>
      <Title>등록된 모든 도서</Title>
      {books.map((books) => (
        <ListItem key={books.id} {...books} />
      ))}
    </section>
  );
};

export default AllList;
