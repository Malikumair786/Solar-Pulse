import React from "react";
import siteModelImage from "assets/site_model.jpeg";

const SiteInfo = () => {
  return (
    <div className="flex justify-center items-center bg-secondary w-full overflow-hidden">
      <div className="flex justify-center items-center flex-wrap gap-7 p-4 m-5 md:max-w-4xl w-full mx-auto">
        <div className="flex flex-col items-center p-4 border rounded-lg shadow bg-primary max-w-md w-full">
          <figure className="transition-all duration-300 cursor-pointer hover:scale-105 w-full">
            <img
              className="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer"
              src={siteModelImage}
              alt="Site Model"
            />
            <figcaption className="mt-2 text-sm text-center text-white">
              <h2 className="font-bold">Site Overview</h2>
              <p>
                This image provides a detailed model of our solar plant site,
                illustrating the layout and infrastructure. The model serves as
                a visual guide to the site's components and operational
                dynamics, emphasizing key areas of energy production and
                management.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SiteInfo;
