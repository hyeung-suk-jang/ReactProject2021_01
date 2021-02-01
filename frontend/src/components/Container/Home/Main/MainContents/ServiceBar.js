import React from "react";
import service1 from "../../../../../assets/images/service1.png";
import service2 from "../../../../../assets/images/service2.png";
import service3 from "../../../../../assets/images/service3.png";
import service4 from "../../../../../assets/images/service4.png";
import service5 from "../../../../../assets/images/service5.png";
import service6 from "../../../../../assets/images/service6.png";
import service7 from "../../../../../assets/images/service7.png";
import service8 from "../../../../../assets/images/service8.png";

const ServiceBar = () => (
  <div className="service">
    <div className="service-inner">
      <ul>
        <li>
          <a href="">
            <img src={service1} alt="자료 당일 신청" />
            <p>자료 당일신청</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={service2} alt="도서관 방문 예약" />
            <p>도서관 방문 예약</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={service3} alt="디지털도서관 예약" />
            <p>디지털도서관 예약</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={service4} alt="온라인 견학" />
            <p>온라인 견학</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={service5} alt="이용자 교육" />
            <p>이용자 교육</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={service6} alt="편의시설" />
            <p>편의시설</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={service7} alt="찾아오시는 길" />
            <p>찾아오시는 길</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={service8} alt="전체보기/설정" />
            <p>전체보기/설정</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default ServiceBar;
