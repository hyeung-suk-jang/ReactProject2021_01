import React from "react";
import Apply from "./GNB_Items/Apply";
import DigitalCollection from "./GNB_Items/DigitalCollection";
import LibraryGuide from "./GNB_Items/LibraryGuide";
import LibraryIntro from "./GNB_Items/LibraryIntro";
import SearchDoc from "./GNB_Items/SearchDoc";
import useOnMouse from "../../../hooks/useOnMouse";

const GNB = () => {
  const [depth2, setDepth2] = useOnMouse();

  console.log("gnb");
  return (
    <nav className="gnb">
      <div className="menu_bg"></div>
      <div className="gnb_inner">
        <ul className="gnb-depth1 clear">
          <SearchDoc
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            openDepth2={depth2}
          />
          <DigitalCollection
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            openDepth2={depth2}
          />
          <Apply
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            openDepth2={depth2}
          />
          <LibraryGuide
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            openDepth2={depth2}
          />
          <LibraryIntro
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            openDepth2={depth2}
          />
        </ul>
      </div>
    </nav>
  );
};
export default GNB;
