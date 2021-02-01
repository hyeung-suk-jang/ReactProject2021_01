import React from "react";

const Public = () => (
  <div className="public">
    <div className="public_inner">
      <div className="public-top">
        <div className="main_bx library_wrap">
          <strong className="title">도서관 일정</strong>
          <a
            href="https://www.nl.go.kr/NL/contents/N41200000000.do"
            className="main_btn_more_w"
            data-focus="focus"
            title=""
          >
            더보기
          </a>
          <div className="inner">
            <div id="library_schedule" className="library_schedule">
              {/* <!-- Empty Layout --> */}
              <div className="control_wrap">
                <button
                  type="button"
                  className="btn__layer btn_month"
                  data-layer="layer_schedule"
                >
                  <strong className="month">2021년 01월</strong>
                </button>
                <div className="controller">
                  <button onClick={() => {}} className="btn btn_prev">
                    <span className="sp_main">이전</span>
                    12월
                  </button>
                  <button onClick={() => {}} className="btn btn_next">
                    02월
                    <span className="sp_main">다음</span>
                  </button>
                </div>
              </div>
              <div className="table_wrap">
                <table>
                  <caption className="ir_text">
                    도서관 행사일정 - 일, 월, 화, 수, 목, 금, 토 순서로 구성된
                    달력 표
                  </caption>
                  <thead>
                    <tr>
                      {/* <!-- <th scope="col" className="sun"><span>일</span></th>
                                         <th scope="col"><span>월</span></th>
                                         <th scope="col"><span>화</span></th>
                                         <th scope="col"><span>수</span></th>
                                         <th scope="col"><span>목</span></th>
                                         <th scope="col"><span>금</span></th>
                                         <th scope="col" className="sat"><span>토</span></th> --> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <input type="hidden" value="4" />
                      <td id="2021-01-17" className="dispDay sun">
                        <div className="day">
                          <div className="inner">
                            <button
                              type="button"
                              className="closed_temporary"
                              data-tooltip-text="임시휴관일"
                            >
                              <strong>17</strong>
                              <span className="ir_text">임시휴관일</span>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td id="2021-01-18" className="dispDay ">
                        <div className="day">
                          <div className="inner">
                            <button
                              type="button"
                              className="closed_temporary"
                              data-tooltip-text="임시휴관일"
                            >
                              <strong>18</strong>
                              <span className="ir_text">임시휴관일</span>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td id="2021-01-19" className="dispDay ">
                        <div className="day">
                          {/* <!--
                                                                             [D]일정별 클래스
                                                                             정기휴관일인 경우 : closed 클래스
                                                                             임시휴관일인 경우 : closed_temporary 클래스
                                                                             교육인 경우 : educate 클래스
                                                                             클래스 대체텍스트 추가 요청드립니다.
                                                                             --> */}
                          <div className="inner">
                            <strong>19</strong>
                          </div>
                        </div>
                      </td>
                      <td id="2021-01-20" className="dispDay today">
                        <div className="day">
                          {/* <!--
                                                                             [D]일정별 클래스
                                                                             정기휴관일인 경우 : closed 클래스
                                                                             임시휴관일인 경우 : closed_temporary 클래스
                                                                             교육인 경우 : educate 클래스
                                                                             클래스 대체텍스트 추가 요청드립니다.
                                                                             --> */}
                          <div className="inner">
                            <strong>20</strong>
                          </div>
                        </div>
                      </td>
                      <td id="2021-01-21" className="dispDay ">
                        <div className="day">
                          {/* <!--
                                                                             [D]일정별 클래스
                                                                             정기휴관일인 경우 : closed 클래스
                                                                             임시휴관일인 경우 : closed_temporary 클래스
                                                                             교육인 경우 : educate 클래스
                                                                             클래스 대체텍스트 추가 요청드립니다.
                                                                             --> */}
                          <div className="inner">
                            <strong>21</strong>
                          </div>
                        </div>
                      </td>
                      <td id="2021-01-22" className="dispDay ">
                        <div className="day">
                          {/* <!--
                                                                             [D]일정별 클래스
                                                                             정기휴관일인 경우 : closed 클래스
                                                                             임시휴관일인 경우 : closed_temporary 클래스
                                                                             교육인 경우 : educate 클래스
                                                                             클래스 대체텍스트 추가 요청드립니다.
                                                                             --> */}
                          <div className="inner">
                            <strong>22</strong>
                          </div>
                        </div>
                      </td>
                      <td id="2021-01-23" className="dispDay sat">
                        <div className="day">
                          {/* <!--
                                                                             [D]일정별 클래스
                                                                             정기휴관일인 경우 : closed 클래스
                                                                             임시휴관일인 경우 : closed_temporary 클래스
                                                                             교육인 경우 : educate 클래스
                                                                             클래스 대체텍스트 추가 요청드립니다.
                                                                             --> */}
                          <div className="inner">
                            <strong>23</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <form name="calForm" id="calForm" method="post">
                <input type="hidden" name="act" id="act" />
                <input type="hidden" name="schOpt4" id="schOpt4" value="4" />
                <input type="hidden" name="schOpt1" id="schOpt1" value="2021" />
                <input type="hidden" name="schOpt2" id="schOpt2" value="01" />
                <input type="hidden" name="siteCode" id="siteCode" value="NL" />
                <input
                  type="hidden"
                  name="schSitecode"
                  id="schSitecode"
                  value="NL"
                />
              </form>
              {/* <!-- //Empty Layout --> */}
            </div>
          </div>
          <div className="notify_wrap">
            <ul className="notify_list">
              <li className="notify_item closed">정기휴관</li>
              <li className="notify_item closed_temporary">임시휴관</li>
              <li className="notify_item educate">전시/교육</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="public-btm"></div>
    </div>
  </div>
);

export default Public;
