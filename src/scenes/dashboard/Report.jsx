import React from "react";

const Report = () => {
  const fileUrl =
    "https://drive.google.com/drive/folders/1jBvnRJeEmn6bdm0waRh5MKeNYULDojGP?usp=drive_link";

  return (
    <div className="flex justify-center items-center bg-secondary w-full overflow-hidden py-20">
      <div className="text-center">
        <h1 className="text-lg font-bold text-white mb-4">Access Report</h1>
        <p className="text-white mb-6">
          Click the button below to access a folder containing all relevant site
          images and documents on Google Drive.
        </p>
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark"
        >
          Go to Report
        </a>
      </div>
    </div>
  );
};

export default Report;
