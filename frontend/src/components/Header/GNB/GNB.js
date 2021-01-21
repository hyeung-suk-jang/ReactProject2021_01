import React from "react";
import Apply from "./GNB_Items/Apply";
import DigitalCollection from "./GNB_Items/DigitalCollection";
import LibraryGuide from "./GNB_Items/LibraryGuide";
import LibraryIntro from "./GNB_Items/LibraryIntro";
import SearchDoc from "./GNB_Items/SearchDoc";

const GNB = () => {
  return (
    <nav className="gnb">
      <div className="menu_bg"></div>
      <div className="gnb_inner">
        <ul className="gnb-depth1 clear">
          <SearchDoc className="gnb-depth1_item" />
          <DigitalCollection className="gnb-depth1_item" />
          <Apply className="gnb-depth1_item" />
          <LibraryGuide className="gnb-depth1_item" />
          <LibraryIntro className="gnb-depth1_item" />
        </ul>
      </div>
    </nav>
  );
};

export default GNB;
