import React from "react";
import SectionTitle from "components/SectionTitle";
import { contactInfo } from "Resources/ContactInfo";

const Contact = () => {
  return (
    <>
      <SectionTitle title={"Contact"} />

      <div className="flex  sm:flex-col-reverse">
        {/* left side */}
        <div className="text-tertiary text-sm flex-col mr-4 w-[40vw] sm:w-[65vw] mt-16">
          <p className="text-tertiary text-start">{"{"}</p>
          {Object.keys(contactInfo).map((key) => (
            <p key={key} className="text-tertiary text-start">
              "{key}": "{contactInfo[key]}"
            </p>
          ))}
          <p className="text-tertiary text-start">{"}"}</p>
        </div>

        {/* right side */}
        <div className="w-[30vw] h-[50vh] sm:w-[79vw]">
          <dotlottie-player
            src="https://lottie.host/57cd1e68-179a-4f96-b607-1cc3c9d01fc0/9PLVRPj0TX.json"
            background="transparent"
          ></dotlottie-player>
        </div>
      </div>
    </>
  );
};

export default Contact;
