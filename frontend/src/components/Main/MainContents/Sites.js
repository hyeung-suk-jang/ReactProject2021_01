import React from "react";
import { Link } from "react-router-dom";
import useOnMouse from "../../../hooks/useOnMouse";

const Sites = () => {
  const [sites, setSites] = useOnMouse(true, "일반사용자");
  return (
    <div className="sites">
      <div className="sites-inner">
        <h5>관내 사이트</h5>
        <ul className="tab">
          <li
            className={
              sites.category === "일반사용자" ? "clicked_general" : null
            }
            onClick={(e) => {
              e.preventDefault();
              setSites(true, "일반사용자");
            }}
          >
            <Link to="/">
              <span>일반이용자</span>
            </Link>
          </li>
          <li
            className={
              sites.category === "사서/연구자" ? "clicked_researcher" : null
            }
            onClick={(e) => {
              e.preventDefault();
              setSites(true, "사서/연구자");
            }}
          >
            <Link to="/">
              <span>사서 &middot; 연구자</span>
            </Link>
          </li>
          <li
            className={sites.category === "출판사" ? "clicked_publisher" : null}
            onClick={(e) => {
              e.preventDefault();
              setSites(true, "출판사");
            }}
          >
            <Link to="/">
              <span>출판사</span>
            </Link>
          </li>
        </ul>
        <div
          className={
            sites.open && sites.category === "일반사용자" ? "open" : "close"
          }
        >
          <div>
            <ul>
              <li>
                <Link to="/">
                  <span>국가자료종합목록</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>도서관 정보 나루</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>인문열차, 삶을 달리다</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>한국고전적종합목록시스템</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">
                  <span>국가전자도서관</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>북한자료센터</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>책바다(국가상호대차)</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>ISNI-KOREA</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">
                  <span>대한민국신문아카이브</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>웹자원검색(OASIS)</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>책이음</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            sites.open && sites.category === "사서/연구자" ? "open" : "close"
          }
        >
          <div>
            <ul>
              <li>
                <Link to="/">
                  <span>사서지원서비스</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>도서관 부호 신청</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>서사교육</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Open Access Korea 포털</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">
                  <span>연구정보서비스</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>도서관 정보 나루</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>정책정보 서비스</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">
                  <span>공공도서관 기술정보센터</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>링크드로픈데이터(LOD)</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>한국학사서 글로벌 네트워크</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            sites.open && sites.category === "출판사" ? "open" : "close"
          }
        >
          <div>
            <ul>
              <li>
                <Link to="/">
                  <span>납본신청</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>온라인자료 납본</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">
                  <span>도서관 정보 나루</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>한국문헌번호센터ISBN/ISSN</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">
                  <span>서지정보유통지원시스템</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sites;
