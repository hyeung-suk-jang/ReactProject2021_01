import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../../hooks/useInput";


const SearchBar = () => {
  const history = useHistory();
  const [product, onChangeProduct, setProduct] = useInput("");
  const onSearch = useCallback(
    (e) => {
      e.preventDefault();

      history.push(`/detail/${product}`);
      setProduct("");
    },
    [product]
  );
  return (
    <div className="search">
      <div className="search-inner">
        <form onSubmit={onSearch}>
          <div className="search-box">
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              value={product}
              onChange={onChangeProduct}
            />
            <button type="button">다국어입력기</button>
          </div>
          <div>
            <button type="submit">검색</button>
          </div>
          <div>
            <button type="button">상세검색</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
