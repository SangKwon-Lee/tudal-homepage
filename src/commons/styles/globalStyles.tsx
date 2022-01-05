import { Global, css } from "@emotion/react";

const reset = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
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
`;

export const GlobalStyles = () => {
  return <Global styles={reset}></Global>;
};
