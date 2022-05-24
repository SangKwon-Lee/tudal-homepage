import { Global, css } from "@emotion/react";
const reset = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  [class] {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none; // ol,ul
    border: 0; // button, table, fieldset, input, textarea, select, iframe
    background-color: transparent; // button, dialog, input, mark, meter, prograss
    border-collapse: collapse; // table/
    border-spacing: 0; //table
    -webkit-appearence: none; // input -> IE / 크롬
    appearance: none; //button, input, textarea, select, meter, progress
    color: #4b4b4b;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  * {
    font-family: Spoqa Han Sans Neo, Noto Sans Kr, --apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif, Roboto, "Segoe UI", Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
  }
  :lang(ko) {
    word-break: keep-all;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={reset}></Global>;
};
