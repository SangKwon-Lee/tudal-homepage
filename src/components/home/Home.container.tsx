import { useEffect, useState } from "react";
import HomePresenter from "./Home.presenter";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const HomeContainer = () => {
  const [contentsBtn, setContentsBtn] = useState({
    firstBtn: "editor",
    secondBtn: "sign",
    thirdBtn: "keyword",
  });

  const [faq, setFaq] = useState(0);

  const handleContentsBtn = (e: any) => {
    if (e.target.id === "editor" || e.target.id === "group") {
      setContentsBtn({
        ...contentsBtn,
        firstBtn: e.target.id,
      });
    } else if (
      e.target.id === "sign" ||
      e.target.id === "chart" ||
      e.target.id === "check"
    ) {
      setContentsBtn({
        ...contentsBtn,
        secondBtn: e.target.id,
      });
    } else {
      setContentsBtn({
        ...contentsBtn,
        thirdBtn: e.target.id,
      });
    }
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HomePresenter
      contentsBtn={contentsBtn}
      handleContentsBtn={handleContentsBtn}
      faq={faq}
      setFaq={setFaq}
      windowDimensions={windowDimensions}
    />
  );
};
export default HomeContainer;
