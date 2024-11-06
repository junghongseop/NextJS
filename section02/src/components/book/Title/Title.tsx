import styled from "styled-components";

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <SubhTitle>{subTitle}</SubhTitle>
    </>
  );
};

export default Title;

const StyledTitle = styled.div`
  font-size: large;
  font-weight: bold;
`;

const SubhTitle = styled.div`
  color: gray;
`;
