import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink href="/">📚 ONEBITE BOOKS</StyledLink>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 60px;

  font-weight: bold;
  font-size: 18px;
  line-height: 60px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
