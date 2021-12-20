import {
  HomeMainImg,
  HomeMainWrapper,
  HomeTudalLogo,
  HomeMainContentsWrapper,
  HomeMainTitle,
  HomeMainSubTitle,
  HomeMainText,
  HomeMainBtnWrapper,
  HomeMainGoogleBtn,
  HomeMainAppleBtn,
  HomeMainGoogleImg,
  HomeMainAppImg,
  HomeFirstContentsWrapper,
  HomeFirstBody,
  HomeFirstLeftWrapper,
  HomeFirstText,
  HomeFirstBtnWrapper,
  HomeFirstBtn,
  HomeFirstBtnText,
  HomeFirstBtnTextWrapper,
  HomeFirstRightBody,
  HomeFirstRightImg,
  HomeMobileWrapper,
  HomeFirstTitle,
  HomeFirstSubTitle,
  HomeSecondContentsWrapper,
  HomeSchoolThemeWrapper,
  HomeSchoolTitle,
  HomeSchoolSubTitle,
  HomeSchoolText,
  HomeSchoolImgWrapper,
  HomeSchoolImg,
  HomeFAQTitle,
  HomeFAQWrapper,
  HomeFAQContentsWrapper,
  HomeFAQ,
  HomeFAQAnswer,
  HomeSchollTextWrapper,
  HomeLogoWrapper,
  HomeSchoolContentsWrapper,
} from "./Home.style";
import mainBgBak from "../../assets/imges/mainBg.png";
import tudalLogo from "../../assets/imges/SVG/tudalLogo.svg";
import googleIcon from "../../assets/imges/SVG/playIcon.svg";
import appIcon from "../../assets/imges/SVG/appIcon.svg";
import editorIcon from "../../assets/imges/SVG/editorIcon.svg";
import editorOnIcon from "../../assets/imges/SVG/editorIcon_on.svg";
import groupIcon from "../../assets/imges/SVG/groupIcon.svg";
import groupOnIcon from "../../assets/imges/SVG/groupIcon_on.svg";
import editorContent from "../../assets/imges/editorContent.png";
import groupContent from "../../assets/imges/groupContent.png";
import signIcon from "../../assets/imges/SVG/signIcon.svg";
import signOnIcon from "../../assets/imges/SVG/signIcon_on.svg";
import chartIcon from "../../assets/imges/SVG/chartIcon.svg";
import chartOnIcon from "../../assets/imges/SVG/chartIcon_on.svg";
import checkIcon from "../../assets/imges/SVG/checkIcon.svg";
import checkOnIcon from "../../assets/imges/SVG/checkIcon_on.svg";
import chartContent from "../../assets/imges/chartContent.png";
import checkContent from "../../assets/imges/checkContent.png";
import signContent from "../../assets/imges/signContent.png";
import keywordIcon from "../../assets/imges/SVG/keywordIcon.svg";
import keywordOnIcon from "../../assets/imges/SVG/keywordIcon_on.svg";
import noteIcon from "../../assets/imges/SVG/noteIcon.svg";
import noteOnIcon from "../../assets/imges/SVG/noteIcon_on.svg";
import infoIcon from "../../assets/imges/SVG/infoIcon.svg";
import infoOnIcon from "../../assets/imges/SVG/infoIcon_on.svg";
import keywordContent from "../../assets/imges/keywordContent.png";
import noteContent from "../../assets/imges/noteContent.png";
import infoContent from "../../assets/imges/infoContent.png";
import chartSchool from "../../assets/imges/chartSchool.png";
import themSchool from "../../assets/imges/themSchool.png";
import originSchool from "../../assets/imges/originSchool.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { faqData } from "./faqData";
import styled from "@emotion/styled";
interface IHomeProps {
  contentsBtn: {
    firstBtn: string;
    secondBtn: string;
    thirdBtn: string;
  };
  handleContentsBtn: (e: any) => void;
  faq: number;
  setFaq: React.Dispatch<React.SetStateAction<number>>;
  windowDimensions: {
    width: number;
    height: number;
  };
}

function SampleNextArrow(props: any) {
  return <div style={{ display: "none" }} />;
}

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    overflow: hidden;
  }
  .slick-arrow {
    display: none;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
};

const HomePresenter: React.FC<IHomeProps> = ({
  handleContentsBtn,
  contentsBtn,
  faq,
  setFaq,
  windowDimensions,
}) => {
  const { firstBtn, secondBtn, thirdBtn } = contentsBtn;
  return (
    <>
      <HomeMainWrapper>
        <HomeLogoWrapper>
          <HomeTudalLogo src={tudalLogo} />
        </HomeLogoWrapper>
        <HomeMobileWrapper>
          <HomeMainImg src={mainBgBak} />

          <HomeMainContentsWrapper>
            <HomeMainTitle>투자는 어렵지만,</HomeMainTitle>
            <HomeMainSubTitle>투달은 쉽습니다.</HomeMainSubTitle>
            <HomeMainText>
              BigData, AI 기술로 주린이도 알기 쉬운
              <br />
              3S(Smart, Simple, Speed) 투자정보
            </HomeMainText>
            <HomeMainBtnWrapper>
              <HomeMainGoogleBtn
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.tudal.tp"
                  );
                }}
              >
                <HomeMainGoogleImg src={googleIcon} />
                Google Play
              </HomeMainGoogleBtn>
              <HomeMainAppleBtn
                onClick={() => {
                  window.open("https://apps.apple.com/kr/app/id1455175051");
                }}
              >
                <HomeMainAppImg src={appIcon} />
                App Store
              </HomeMainAppleBtn>
            </HomeMainBtnWrapper>
          </HomeMainContentsWrapper>
        </HomeMobileWrapper>
      </HomeMainWrapper>
      <HomeFirstContentsWrapper>
        <HomeFirstBody>
          <HomeFirstLeftWrapper>
            <HomeFirstTitle>주식선택이 어렵나요?</HomeFirstTitle>
            <HomeFirstSubTitle>투달은 쉽습니다.</HomeFirstSubTitle>
            <HomeFirstText>
              핀테크 기술과 투자고수들이 만나
              <br />
              엄선된 투자종목 리스트 제공
            </HomeFirstText>
            <HomeFirstBtnWrapper>
              <HomeFirstBtnTextWrapper id="editor" onClick={handleContentsBtn}>
                <HomeFirstBtn
                  id="editor"
                  src={firstBtn === "editor" ? editorOnIcon : editorIcon}
                  onClick={handleContentsBtn}
                />
                <HomeFirstBtnText
                  id="editor"
                  style={{
                    color: firstBtn === "editor" ? "#da4446" : "#3e3939",
                  }}
                  onClick={handleContentsBtn}
                >
                  에디터
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
              <HomeFirstBtnTextWrapper id="group" onClick={handleContentsBtn}>
                <HomeFirstBtn
                  id="group"
                  src={firstBtn === "group" ? groupOnIcon : groupIcon}
                />
                <HomeFirstBtnText
                  id="group"
                  style={{
                    color: firstBtn === "group" ? "#da4446" : "#3e3939",
                  }}
                >
                  투달관심그룹
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
            </HomeFirstBtnWrapper>
          </HomeFirstLeftWrapper>
          <HomeFirstRightBody>
            <HomeFirstRightImg
              src={firstBtn === "editor" ? editorContent : groupContent}
            />
          </HomeFirstRightBody>
        </HomeFirstBody>
      </HomeFirstContentsWrapper>
      <HomeSecondContentsWrapper>
        <HomeFirstBody>
          <HomeFirstLeftWrapper>
            <HomeFirstTitle>살까?팔까? 결정이 어렵나요?</HomeFirstTitle>
            <HomeFirstSubTitle>투달은 쉽습니다.</HomeFirstSubTitle>
            <HomeFirstText>
              핀테크로 전종목 일일 점검
              <br />한 줄로 요약되는 간편 투자 판단
            </HomeFirstText>
            <HomeFirstBtnWrapper>
              <HomeFirstBtnTextWrapper id="sign" onClick={handleContentsBtn}>
                <HomeFirstBtn
                  id="sign"
                  src={secondBtn === "sign" ? signOnIcon : signIcon}
                />
                <HomeFirstBtnText
                  id="sign"
                  style={{
                    color: secondBtn === "sign" ? "#da4446" : "#3e3939",
                  }}
                >
                  신호
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
              <HomeFirstBtnTextWrapper id="check" onClick={handleContentsBtn}>
                <HomeFirstBtn
                  id="check"
                  src={secondBtn === "check" ? checkOnIcon : checkIcon}
                />
                <HomeFirstBtnText
                  id="check"
                  style={{
                    color: secondBtn === "check" ? "#da4446" : "#3e3939",
                  }}
                >
                  종합진단
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
              <HomeFirstBtnTextWrapper
                style={{ marginRight: "-20px" }}
                id="chart"
                onClick={handleContentsBtn}
              >
                <HomeFirstBtn
                  id="chart"
                  src={secondBtn === "chart" ? chartOnIcon : chartIcon}
                />
                <HomeFirstBtnText
                  id="chart"
                  style={{
                    color: secondBtn === "chart" ? "#da4446" : "#3e3939",
                  }}
                >
                  종목간편분석
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
            </HomeFirstBtnWrapper>
          </HomeFirstLeftWrapper>
          <HomeFirstRightBody>
            <HomeFirstRightImg
              src={
                secondBtn === "sign"
                  ? signContent
                  : secondBtn === "check"
                  ? checkContent
                  : chartContent
              }
            />
          </HomeFirstRightBody>
        </HomeFirstBody>
      </HomeSecondContentsWrapper>
      <HomeFirstContentsWrapper>
        <HomeFirstBody>
          <HomeFirstLeftWrapper>
            <HomeFirstTitle>왜 오를까? 내릴까? 답답하세요?</HomeFirstTitle>
            <HomeFirstSubTitle>투달은 쉽습니다.</HomeFirstSubTitle>
            <HomeFirstText>
              키워드에서 뉴스,공시,리포트까지
              <br />한 눈에 원인 파악
            </HomeFirstText>
            <HomeFirstBtnWrapper>
              <HomeFirstBtnTextWrapper id="keyword" onClick={handleContentsBtn}>
                <HomeFirstBtn
                  id="keyword"
                  src={thirdBtn === "keyword" ? keywordOnIcon : keywordIcon}
                />
                <HomeFirstBtnText
                  id="keyword"
                  style={{
                    color: thirdBtn === "keyword" ? "#da4446" : "#3e3939",
                  }}
                >
                  종목키워드
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
              <HomeFirstBtnTextWrapper id="note" onClick={handleContentsBtn}>
                <HomeFirstBtn
                  id="note"
                  src={thirdBtn === "note" ? noteOnIcon : noteIcon}
                />
                <HomeFirstBtnText
                  id="note"
                  style={{
                    color: thirdBtn === "note" ? "#da4446" : "#3e3939",
                  }}
                >
                  달인노트
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
              <HomeFirstBtnTextWrapper id="info" onClick={handleContentsBtn}>
                <HomeFirstBtn
                  id="info"
                  src={thirdBtn === "info" ? infoOnIcon : infoIcon}
                />
                <HomeFirstBtnText
                  id="info"
                  style={{
                    color: thirdBtn === "info" ? "#da4446" : "#3e3939",
                  }}
                >
                  정보
                </HomeFirstBtnText>
              </HomeFirstBtnTextWrapper>
            </HomeFirstBtnWrapper>
          </HomeFirstLeftWrapper>
          <HomeFirstRightBody>
            <HomeFirstRightImg
              src={
                thirdBtn === "keyword"
                  ? keywordContent
                  : thirdBtn === "note"
                  ? noteContent
                  : infoContent
              }
            />
          </HomeFirstRightBody>
        </HomeFirstBody>
      </HomeFirstContentsWrapper>
      <HomeSchoolThemeWrapper>
        <HomeSchoolContentsWrapper>
          <HomeSchollTextWrapper>
            <HomeSchoolTitle>주식투자 배우는 게 어렵나요?</HomeSchoolTitle>
            <HomeSchoolSubTitle>투달은 쉽습니다.</HomeSchoolSubTitle>
            <HomeSchoolText>
              정석투자에서 테마와 차트까지 다양한 투자기술 전수
            </HomeSchoolText>
          </HomeSchollTextWrapper>
          <HomeSchoolImgWrapper>
            {windowDimensions.width < 680 ? (
              <>
                <StyledSlider {...settings}>
                  <div>
                    <HomeSchoolImg src={chartSchool} />
                  </div>
                  <div>
                    <HomeSchoolImg src={themSchool} />
                  </div>
                  <div>
                    <HomeSchoolImg src={originSchool} />
                  </div>
                </StyledSlider>
              </>
            ) : (
              <>
                <HomeSchoolImg src={chartSchool} />
                <HomeSchoolImg src={themSchool} />
                <HomeSchoolImg src={originSchool} />
              </>
            )}
          </HomeSchoolImgWrapper>
        </HomeSchoolContentsWrapper>
      </HomeSchoolThemeWrapper>
      <HomeFAQWrapper>
        <HomeFAQContentsWrapper>
          <HomeFAQTitle>투달 FAQ</HomeFAQTitle>
          {faqData.map((data: any, index: number) => (
            <>
              <HomeFAQ
                key={index}
                style={{
                  borderTop:
                    index === 0 ? "3px solid #e5e5e5" : "1px solid #e5e5e5",
                  color: faq === index ? "#da4446" : "#3e3939",
                }}
                onClick={() => {
                  setFaq(index);
                }}
              >
                {data.q}
              </HomeFAQ>
              {faq === index && <HomeFAQAnswer>{data.a}</HomeFAQAnswer>}
            </>
          ))}
        </HomeFAQContentsWrapper>
      </HomeFAQWrapper>
    </>
  );
};
export default HomePresenter;
