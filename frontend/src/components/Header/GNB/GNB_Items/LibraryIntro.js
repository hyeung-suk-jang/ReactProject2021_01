import React from "react";

const LibraryIntro = () => {
  return (
    <li>
      <a href="" class="depth">
        <span>도서관 소개</span>
      </a>
      <ul class="gnb-depth2">
        <li class="gnb-depth2_item">
          <a href="">국립중앙도서관</a>
        </li>
        <li class="gnb-depth2_item">
          <a href="">소속도서관</a>
        </li>
        <li class="gnb-depth2_item">
          <a href="">도서관 협력망</a>
        </li>
        <li class="gnb-depth2_item">
          <a href="">도서관소식</a>
        </li>
        <li class="gnb-depth2_item">
          <a href="">발간자료</a>
        </li>
        <li class="gnb-depth2_item">
          <a href="">정보공개</a>
        </li>
        <li class="gnb-depth2_item">
          <a href="">관내사이트 안내</a>
        </li>
      </ul>
    </li>
  );
};

export default LibraryIntro;
