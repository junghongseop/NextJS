import Title from "../../Title/Title";
import ListItem from "../ListItem/ListItem";
import books from "@/mocks/books.json";

const RecommandList = () => {
  return (
    <section>
      <Title>지금 추천하는 도서</Title>
      {books.map((books) => (
        <ListItem key={books.id} {...books} />
      ))}
    </section>
  );
};

export default RecommandList;
