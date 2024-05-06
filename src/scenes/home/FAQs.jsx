import React, { useState } from "react";
import SectionTitle from "components/SectionTitle";
import { faqs } from "Resources/FAQs";

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <SectionTitle title="FAQs" />
      <div id="accordion-color">
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-tertiary dark:hover:bg-gray-800 gap-3"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFaq === index}
                aria-controls={`accordion-color-body-${index}`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-color-body-${index}`}
              className={`${openFaq === index ? "block" : "hidden"}`}
              aria-labelledby={`accordion-color-heading-${index}`}
            >
              <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
