import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-primary max-w-full">
        <div className="w-auto h-[2px] text-[#000] bg-tertiary" />
        <div className="flex-col text-center p-5 text-white">
          <div>Design and Developed by Spectrave</div>
          {/* <div>Spectrave</div> */}
          <i className="ri-copyright-fill"> 2023-2024 </i>
        </div>
      </div>
    </>
  );
};

export default Footer;
