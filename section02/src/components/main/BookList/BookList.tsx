import styled from "styled-components";
import AllList from "./AllList/AllList";
import RecommandList from "./RecommandList/RecommandList";
import { BookData } from "@/types/main/type";

interface BookListProps {
  allbook: BookData[];
  recommandbook: BookData[];
}

const BookList = ({ allbook, recommandbook }: BookListProps) => {
  return (
    <Container>
      <AllList allbooks={allbook} />
      <RecommandList recommandbooks={recommandbook} />
    </Container>
  );
};

export default BookList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
