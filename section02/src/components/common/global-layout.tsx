import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default GlobalLayout;

const Container = styled.div`
  background-color: white;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;

  box-shadow: rgba(100, 100, 100, 0.2) 0px 0px 29px 0px;
  padding: 0px 15px;
`;

const Main = styled.main`
  padding: 10px;
`;
