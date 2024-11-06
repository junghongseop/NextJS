import styled from "styled-components";

interface DescriptionProps {
  author: string;
  publisher: string;
  description: string;
}

const Description = ({ author, publisher, description }: DescriptionProps) => {
  return (
    <>
      <Author>
        {author} | {publisher}
      </Author>
      <StyledDescription>{description}</StyledDescription>
    </>
  );
};

export default Description;

const Author = styled.div`
  color: gray;
`;

const StyledDescription = styled.div`
  background-color: rgb(245, 245, 245);
  padding: 15px;
  line-height: 1.3;
  white-space: pre-line;
  border: 5px;
`;
