// @ts-nocheck
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactPixel from "react-facebook-pixel";
import "./style/style.css";
const advancedMatching = { em: "support@innofin.co.kr" };
const options = {
  autoConfig: true,
  debug: false,
};
ReactPixel.track("PageView");
ReactPixel.init("1135810613546802", advancedMatching, options);

const Landing3 = () => {
  const handleClick = () => {
    ReactPixel.fbq("track", "CompleteRegistration");
    ReactPixel.track("CompleteRegistration");
  };

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

          <script></script>

          {/* <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1135810613546802&ev=PageView&noscript=1"
              alt=""
            />
          </noscript> */}
        </Helmet>
      </HelmetProvider>
      <div id="container">
        <div class="topWrap">
          <div class="top">
            <img src="../img/topcont.png" alt="" />
            <div class="btn_wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.tudal.tp"
                id="button_link"
                onClick={handleClick}
              >
                <img src="img/btn_g.svg" alt="" />
              </a>
              <a
                href="https://apps.apple.com/kr/app/id1455175051"
                id="button_link"
                onClick={handleClick}
              >
                <img src="img/btn_a.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div class="cont_01 content">
          <img src="../img/content_01.png" alt="" />
        </div>

        <div class="cont_02 content">
          <img src="../img/content_02.png" alt="" />
        </div>

        <div class="cont_03 content">
          <img src="../img/content_03.png" alt="" />
        </div>

        <div class="bottom">
          <img src="../img/bottom_txt.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Landing3;
