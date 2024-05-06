import React, { useEffect } from "react";
import "./index.css";

const Loader = () => {
  useEffect(() => {
    // Disable vertical and horizontal scrollbars
    document.body.style.overflow = "hidden";

    return () => {
      // Enable vertical and horizontal scrollbars when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
