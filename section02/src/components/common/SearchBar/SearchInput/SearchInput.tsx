import styled from "styled-components";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchInput = ({ value, onChange, onKeyDown, onSearch }: Props) => {
  return (
    <>
      <StyledInput
        placeholder="검색어를 입력하세요..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <StyledButton onClick={onSearch}>검색</StyledButton>
    </>
  );
};

export default SearchInput;

const StyledInput = styled.input`
  flex: 1;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);
`;

const StyledButton = styled.button`
  width: 80px;
  border-radius: 5px;
  border: none;
  background-color: rgb(37, 147, 255);
  color: white;
  cursor: pointer;
`;
