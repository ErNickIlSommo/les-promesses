import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      //   console.log(hash);
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash]);
  return;
};

export default ScrollToHash;
