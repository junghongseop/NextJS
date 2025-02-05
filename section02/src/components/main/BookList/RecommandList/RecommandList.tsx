import { BookData } from "@/types/main/type";
import Title from "../../Title/Title";
import ListItem from "../ListItem/ListItem";

const RecommandList = ({ recommandbooks }: { recommandbooks: BookData[] }) => {
  return (
    <section>
      <Title>지금 추천하는 도서</Title>
      {recommandbooks.map((books) => (
        <ListItem key={books.id} {...books} />
      ))}
    </section>
  );
};

export default RecommandList;
