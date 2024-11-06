import { BookData } from "@/types/main/type";
import Link from "next/link";
import styled from "styled-components";

const ListItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <StyledItem href={`/book/${id}`} passHref>
        <StyledImage src={coverImgUrl} />
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubTitle>{subTitle}</StyledSubTitle>
          <br />
          <StyledAuthor>
            {author} | {publisher}
          </StyledAuthor>
        </div>
    </StyledItem>
  );
};

export default ListItem;

const StyledItem = styled(Link)`
  display: flex;
  gap: 15px;
  padding: 20px 10px;
  border-bottom: 1px solid rgb(220, 220, 220);

  color: black;
  text-decoration: none;
`;

const StyledImage = styled.img`
  width: 80px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;

const StyledSubTitle = styled.div`
  word-break: keep-all;
`;

const StyledAuthor = styled.div`
  color: gray;
`;
