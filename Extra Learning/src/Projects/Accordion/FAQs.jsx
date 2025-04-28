export const FaqsComponent = ({ currFaq, activeFaq, handleActiveFaqs }) => {
  return (
    <li className="currFaq" onClick={() => handleActiveFaqs(currFaq.id)}>
      <div className="question">
        <p>{currFaq.question}</p>
        <button
          className={`${activeFaq ? "closeBtn" : "showBtn"}`}
          onClick={(e) => {
            e.stopPropagation();
            handleActiveFaqs(currFaq.id);
          }}
        >
          {activeFaq ? "CLOSE" : "SHOW"}
        </button>
      </div>
      {activeFaq && <p className="answer">{currFaq.answer}</p>}
    </li>
  );
};
