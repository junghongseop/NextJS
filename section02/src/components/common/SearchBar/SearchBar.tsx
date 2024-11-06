import { useRouter } from "next/router";
import SearchInput from "./SearchInput/SearchInput";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSerarch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSerarch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerarch(e.target.value);
  };

  const onSearch = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <InputContainer>
      <SearchInput
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onEnterDown}
        onSearch={onSearch}
      />
    </InputContainer>
  );
};

export default SearchBar;

const InputContainer = styled.div`
display: flex;
gap: 10px;
margin-bottom: 20px;
`;