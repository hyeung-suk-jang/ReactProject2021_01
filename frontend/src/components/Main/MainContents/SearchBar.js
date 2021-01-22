import React from "react";

const SearchBar = () => (
  <div className="search">
    <div className="search-inner">
      <div className="search-box">
        <input type="text" placeholder="검색어를 입력해주세요." />
        <button type="button">다국어입력기</button>
      </div>
      <div>
        <button type="submit">검색</button>
      </div>
      <div>
        <button type="button">상세검색</button>
      </div>
    </div>
  </div>
);

export default SearchBar;
