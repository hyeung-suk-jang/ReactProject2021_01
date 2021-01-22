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
            depth2={{ open: depth2.open, category: depth2.category }}
          />
          <DigitalCollection
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            depth2={{ open: depth2.open, category: depth2.category }}
          />
          <Apply
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            depth2={{ open: depth2.open, category: depth2.category }}
          />
          <LibraryGuide
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            depth2={{ open: depth2.open, category: depth2.category }}
          />
          <LibraryIntro
            className="gnb-depth1_item"
            onMouseGnb={setDepth2}
            depth2={{ open: depth2.open, category: depth2.category }}
          />
        </ul>
      </div>
    </nav>
  );
};
export default GNB;
