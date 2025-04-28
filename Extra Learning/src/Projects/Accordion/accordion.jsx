import faqs from "@/Projects/Accordion/api/faq.json";
import { FaqsComponent } from "@/Projects/Accordion/FAQs";
import { useEffect, useState } from "react";

export const Accordion = () => {
  const [faqSeries, setFaqSeries] = useState([]);
  const [isActiveFaq, setIsActiveFaq] = useState(null);

  useEffect(() => {
    setFaqSeries(faqs);
  }, []);

  const handleActiveFaqs = (id) => {
    setIsActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h1>Accordion</h1>

      <ul className="faqs">
        {faqSeries.map((currFaq) => {
          return (
            <FaqsComponent
              key={currFaq.id}
              currFaq={currFaq}
              activeFaq={isActiveFaq === currFaq.id}
              handleActiveFaqs={handleActiveFaqs}
            />
          );
        })}
      </ul>
    </>
  );
};
