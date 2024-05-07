import React from "react";
import { table1 } from "Resources/table1";
import defect01 from "assets/defect01.png";

const Anomalies = () => {
  return (
    <div className="flex justify-center items-center bg-secondary w-full overflow-hidden">
      <div className="flex justify-center items-center flex-wrap gap-7 p-4 m-5 md:max-w-4xl w-full mx-auto">
        {table1.map((anomaly, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg shadow bg-primary max-w-xs w-full"
          >
            <figure className="transition-all duration-300 cursor-pointer hover:scale-105 w-full">
              <img
                className="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                src={defect01}
                alt="Anomaly Depiction"
              />
              <figcaption className="mt-2 text-sm text-center text-white">
                <h2 className="font-bold">{anomaly.anomalyName}</h2>
                <p>ID: {anomaly.anomalyID}</p>
                <p>Δ Temperature: {anomaly.deltaTemperature}°C</p>
                <p>
                  Corrected Δ Temperature: {anomaly.correctedDeltaTemperature}°C
                </p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anomalies;
