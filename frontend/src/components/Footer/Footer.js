import React from "react";
import Footer_top from "./Footer_top";
import Footer_bottom from "./Footer_bottom";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <Footer_top mobile={true} />
      <Footer_bottom />
      {/* <!-- //푸터 하단 --> 
    <!--  한국문화정보원 웹로그 -->  */}
    </div>
  );
};

export default Footer;
