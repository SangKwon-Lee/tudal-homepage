import { Global, css } from "@emotion/react";

const reset = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "Noto Sans KR", --apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif, Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 100;
    src: url(/assets/fonts/NotoSansKR-Thin.woff2) format("woff2"),
      url(/assets/fonts/NotoSansKR-Thin.woff) format("woff"),
      url(/assets/fonts/NotoSansKR-Thin.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    src: url(/assets/fonts/NotoSansKR-Light.woff2) format("woff2"),
      url(/assets/fonts/NotoSansKR-Light.woff) format("woff"),
      url(/assets/fonts/NotoSansKR-Light.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    src: url(/assets/fonts/NotoSansKR-Regular.woff2) format("woff2"),
      url(/assets/fonts/NotoSansKR-Regular.woff) format("woff"),
      url(/assets/fonts/NotoSansKR-Regular.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    src: url(/assets/fonts/NotoSansKR-Medium.woff2) format("woff2"),
      url(/assets/fonts/NotoSansKR-Medium.woff) format("woff"),
      url(/assets/fonts/NotoSansKR-Medium.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    src: url(/assets/fonts/NotoSansKR-Bold.woff2) format("woff2"),
      url(/assets/fonts/NotoSansKR-Bold.woff) format("woff"),
      url(/assets/fonts/NotoSansKR-Bold.otf) format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 900;
    src: url(/assets/fonts/NotoSansKR-Black.woff2) format("woff2"),
      url(/assets/fonts/NotoSansKR-Black.woff) format("woff"),
      url(/assets/fonts/NotoSansKR-Black.otf) format("opentype");
  }
`;

export const GlobalStyles = () => {
  return <Global styles={reset}></Global>;
};
