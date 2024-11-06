import styled from "styled-components";

interface ImageProps {
  coverImgUrl: string;
}

const Cover = ({ coverImgUrl }: ImageProps) => {
  return (
    <>
      <CoverContainer coverImgUrl={coverImgUrl}>
        <Overlay />
        <StyledImage src={coverImgUrl} />
      </CoverContainer>
    </>
  );
};

export default Cover;

const CoverContainer = styled.div<{ coverImgUrl: string }>`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px;
  background-image: url(${(props) => props.coverImgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StyledImage = styled.img`
  z-index: 1;
  max-height: 350px;
  height: 100%;
`;
