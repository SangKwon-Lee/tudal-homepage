import {
  HomeMainImg,
  HomeMainWrapper,
  HomeMainContentsWrapper,
  HomeContents,
  HomeFirstContentsWrapper,
  HomeContentsTextWrapper,
  HomeContentsTitle,
  HomeContentsIconWrapper,
  HomeContentsIcon,
  HomeContentsTextBold,
  HomeContentsText,
  HomeFirstPngWrapper,
  HomeMainTitleBold,
  HomeMyPng,
  HomeKeyPng,
  HomeSecondContentsWrapper,
  HomeSecondPngWrapper,
  HomeTriplePng1,
  HomeTriplePng2,
  HomeTriplePng3,
  HomeMainTitle,
  HomeMainSubText,
  HomeMainBtnWrapper,
  HomeMainBtn,
  HomeMainIcon,
  HomeSecendContentsTextWrapper,
  HomeLastPngWrapper,
  HomeLastPng,
  HomeLastPng2,
  HomeLastPng3,
  HomeMyDalin,
  HomeMyDalin2,
} from "./Home.style";

import { Helmet, HelmetProvider } from "react-helmet-async";
import keyPng from "../../assets/images/my2.png";
import myPng from "../../assets/images/key2.png";
import triplePng1 from "../../assets/images/triple01.png";
import triplePng2 from "../../assets/images/triple02.png";
import triplePng3 from "../../assets/images/triple03.png";
import searchPng1 from "../../assets/images/search01.png";
import searchPng2 from "../../assets/images/search02.png";
import searchPng3 from "../../assets/images/search03.png";
import dalin1 from "../../assets/images/dalin01.png";
import dalin2 from "../../assets/images/dalin02.png";
import mainBgBak from "../../assets/images/mainBgBak1.png";
import googleIcon from "../../assets/images/google.png";
import appIcon from "../../assets/images/apple.png";
import webIcon1 from "../../assets/images/webicon_01.svg";
import webIcon2 from "../../assets/images/webicon_02.svg";
import webIcon3 from "../../assets/images/webicon_03.svg";
import webIcon4 from "../../assets/images/webicon_04.svg";
import webIcon5 from "../../assets/images/webicon_05.svg";

const HomePresenter = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <script
            type="text/javascript"
            src="https://pg.innopay.co.kr/ipay/js/jquery-2.1.4.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://pg.innopay.co.kr/ipay/js/innopay-2.0.js"
            charSet="utf-8"
          ></script>
        </Helmet>
      </HelmetProvider>
      <HomeMainWrapper>
        <HomeMainImg src={mainBgBak} />
        <HomeMainContentsWrapper>
          <HomeMainTitle>
            투자는 어렵지만,
            <HomeMainTitleBold>투달은 쉽습니다.</HomeMainTitleBold>
          </HomeMainTitle>
          <HomeMainSubText>
            Big Data, AI 기술로 주린이도 알기 쉬운
            <br />
            3S(Smart, Simple, Speed) 투자정보
          </HomeMainSubText>
          <HomeMainBtnWrapper>
            <HomeMainBtn
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.tudal.tp"
                );
              }}
            >
              <HomeMainIcon src={appIcon} />
              App Store
            </HomeMainBtn>
            <HomeMainBtn
              onClick={() => {
                window.open("https://apps.apple.com/kr/app/id1455175051");
              }}
            >
              <HomeMainIcon />
              <HomeMainIcon src={googleIcon} />
              Googld Play
            </HomeMainBtn>
          </HomeMainBtnWrapper>
        </HomeMainContentsWrapper>
      </HomeMainWrapper>
      <HomeContents>
        <HomeFirstContentsWrapper>
          <HomeContentsTextWrapper>
            <HomeContentsTitle>주식선택이 어렵나요?</HomeContentsTitle>
            <HomeContentsTitle>투달은 쉽습니다.</HomeContentsTitle>
            <HomeContentsIconWrapper>
              <HomeContentsIcon src={webIcon1} />
              <HomeContentsTextWrapper>
                <HomeContentsTextBold>
                  투데이
                  <HomeContentsText style={{ fontWeight: 400 }}>
                    &nbsp; | 오늘의 이슈 키워드
                  </HomeContentsText>
                </HomeContentsTextBold>
                <HomeContentsText>
                  매일 달라지는 이슈와 핫한 테마를 키워드로 분석하여 <br />
                  시장의 흐름을 한눈에 파악
                </HomeContentsText>
              </HomeContentsTextWrapper>
            </HomeContentsIconWrapper>
            <HomeContentsIconWrapper>
              <HomeContentsIcon src={webIcon2} />
              <HomeContentsTextWrapper>
                <HomeContentsTextBold>마이투달</HomeContentsTextBold>
                <HomeContentsText>
                  나의 투자성향에 딱 맞춘 최적의 종목과 투자 정보를 매칭
                </HomeContentsText>
              </HomeContentsTextWrapper>
            </HomeContentsIconWrapper>
          </HomeContentsTextWrapper>
          <HomeFirstPngWrapper>
            <HomeMyPng src={myPng} />
            <HomeKeyPng src={keyPng} />
          </HomeFirstPngWrapper>
        </HomeFirstContentsWrapper>
      </HomeContents>
      <HomeContents style={{ backgroundColor: "#F9F9F9" }}>
        <HomeSecondContentsWrapper>
          <HomeContentsTitle>살까? 팔까? 결정이 어렵나요?</HomeContentsTitle>
          <HomeContentsTitle>투달은 쉽습니다.</HomeContentsTitle>
          <HomeSecendContentsTextWrapper style={{ marginTop: "45px" }}>
            Triple AI 진단 기술로 단기, 중기, 장기 투자 매력도를 ABC로 알기 쉽게
            분석 진단
          </HomeSecendContentsTextWrapper>
          <HomeSecondPngWrapper>
            <HomeTriplePng1 src={triplePng1} />
            <HomeTriplePng2 src={triplePng2} />
            <HomeTriplePng3 src={triplePng3} />
          </HomeSecondPngWrapper>
        </HomeSecondContentsWrapper>
      </HomeContents>
      <HomeContents>
        <HomeFirstContentsWrapper>
          <HomeFirstPngWrapper>
            <HomeMyDalin src={dalin1} />
            <HomeMyDalin2 src={dalin2} />
          </HomeFirstPngWrapper>
          <HomeContentsTextWrapper>
            <HomeContentsTitle>투자가 궁금할 때</HomeContentsTitle>
            <HomeContentsTitle>투자 달인을 만나보세요</HomeContentsTitle>
            <HomeContentsIconWrapper>
              <HomeContentsIcon src={webIcon3} />
              <HomeContentsTextWrapper>
                <HomeContentsTextBold>
                  달인
                  <HomeContentsText style={{ fontWeight: 400 }}>
                    &nbsp; | 오늘의 이슈 키워드
                  </HomeContentsText>
                </HomeContentsTextBold>
                <HomeContentsText>
                  달인의 깊이있는 투자노하우와
                  <br />
                  실시간 투자정보, 투자전략을 전달하는 메신저 서비스
                </HomeContentsText>
              </HomeContentsTextWrapper>
            </HomeContentsIconWrapper>
            <HomeContentsIconWrapper>
              <HomeContentsIcon src={webIcon4} />
              <HomeContentsTextWrapper>
                <HomeContentsTextBold>히든리포트</HomeContentsTextBold>
                <HomeContentsText>
                  투자 전문가의 한발 앞선 투자의 흐름과 시장에 노출되지 않은{" "}
                  <br />
                  핵심 투자정보를 담은 리포트 제공
                </HomeContentsText>
              </HomeContentsTextWrapper>
            </HomeContentsIconWrapper>
          </HomeContentsTextWrapper>
        </HomeFirstContentsWrapper>
      </HomeContents>
      <HomeContents style={{ backgroundColor: "#F9F9F9" }}>
        <HomeFirstContentsWrapper>
          <HomeContentsTextWrapper>
            <HomeContentsTitle>강력한 투자키워드 검색</HomeContentsTitle>
            <HomeContentsIconWrapper>
              <HomeContentsIcon src={webIcon5} />
              <HomeContentsTextWrapper>
                <HomeContentsTextBold>
                  키워드 중심 검색 아키텍쳐
                </HomeContentsTextBold>
                <HomeContentsText>
                  투자 키워드 연관 검색과 간편진단으로 가장 빠른 종목 선택
                  <br />
                  검색어와 관련된 투자정보를 한눈에 보기 쉽게
                </HomeContentsText>
              </HomeContentsTextWrapper>
            </HomeContentsIconWrapper>
          </HomeContentsTextWrapper>
          <HomeLastPngWrapper>
            <HomeLastPng src={searchPng1} />
            <HomeLastPng2 src={searchPng2} />
            <HomeLastPng3 src={searchPng3} />
          </HomeLastPngWrapper>
        </HomeFirstContentsWrapper>
      </HomeContents>
    </>
  );
};
export default HomePresenter;
