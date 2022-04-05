// @ts-nocheck
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactPixel from "react-facebook-pixel";
import "./style/style.css";
const options = {
  autoConfig: true,
  debug: false,
};
ReactPixel.track("PageView");
ReactPixel.track("ViewContent");
ReactPixel.init("3172269179709072");

const Landing2 = () => {
  const handleClick = () => {
    ReactPixel.track("ViewContent");
  };

  const initGA = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-10869743597");
  };
  initGA();

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-10869743597/uQnaCN2epKsDEO2_jL8o",
      event_callback: callback,
    });
    return false;
  }

  function onClickButton() {
    ReactPixel.track("ViewContent");
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="facebook-domain-verification"
            content="wkuc1g0dofg634y6nz0t2z3kc9vr34"
          />
          <title>후달리던 투자가 투달해서 올랐다</title>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-10869743597"
          ></script>
        </Helmet>
      </HelmetProvider>
      <div id="container">
        <div class="topWrap">
          <div class="topbg">
            <div class="top contImg">
              <img src="../img/topcont.png" alt="" class="contImg pc_view" />
              <img src="../img/topcont_mo.png" alt="" class="contImg mo_view" />
              <div class="btn_wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tudal.tp"
                  id="button_link"
                  onClick={() => {
                    gtag_report_conversion(
                      "https://play.google.com/store/apps/details?id=com.tudal.tp"
                    );
                    onClickButton();
                  }}
                >
                  <img src="../img/btn_g.svg" alt="" />
                </a>
                <a
                  href="https://apps.apple.com/kr/app/id1455175051"
                  id="button_link"
                  onClick={() => {
                    gtag_report_conversion(
                      "https://apps.apple.com/kr/app/id1455175051"
                    );
                    onClickButton();
                  }}
                >
                  <img src="../img/btn_a.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="cont_01 content">
          <img src="../img/content_01.png" alt="" class="contImg pc_view" />
          <img src="../img/content_01_mo.png" alt="" class="contImg mo_view" />
        </div>

        <div class="cont_02 content">
          <img src="../img/content_02.png" alt="" class="contImg pc_view" />
          <img src="../img/content_02_mo.png" alt="" class="contImg mo_view" />
        </div>

        <div class="cont_03 content">
          <img src="../img/content_03_01.png" alt="" class="contImg pc_view" />
          <img
            src="../img/content_03_01_mo.png"
            alt=""
            class="contImg mo_view"
          />
          <div class="btn_wrap contentBtn contImg">
            <a
              href="https://play.google.com/store/apps/details?id=com.tudal.tp"
              id="button_link"
              onClick={() => {
                gtag_report_conversion(
                  "https://play.google.com/store/apps/details?id=com.tudal.tp"
                );
                onClickButton();
              }}
            >
              <img src="../img/btn_g.svg" alt="" />
            </a>
            <a
              href="https://apps.apple.com/kr/app/id1455175051"
              id="button_link"
              onClick={() => {
                gtag_report_conversion(
                  "https://apps.apple.com/kr/app/id1455175051"
                );
                onClickButton();
              }}
            >
              <img src="../img/btn_a.svg" alt="" />
            </a>
          </div>
          <img src="../img/content_03_02.png" alt="" class="contImg pc_view" />
          <img
            src="../img/content_03_02_mo.png"
            alt=""
            class="contImg mo_view"
          />
        </div>

        <div class="bottom">
          <img src="../img/bottom_txt.png" alt="" class="contImg pc_view" />
          <img src="../img/bottom_txt_mo.png" alt="" class="contImg mo_view" />
        </div>
      </div>
    </>
  );
};

export default Landing2;
