import { ReactNode } from "react";
import styled from "styled-components";

const Title = ({ children }: { children: ReactNode }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h3`
  margin-bottom: 0;
`;
