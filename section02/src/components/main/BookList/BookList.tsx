import styled from "styled-components";
import AllList from "./AllList/AllList";
import RecommandList from "./RecommandList/RecommandList";

const BookList = () => {
  return (
    <Container>
      <AllList />
      <RecommandList />
    </Container>
  );
};

export default BookList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
