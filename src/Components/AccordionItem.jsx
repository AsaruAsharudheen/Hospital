import React, { useState } from 'react';

// You will need to put this component file (e.g., in Components/AccordionItem.jsx)
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    // 'faq-item' and 'open' class for styling the state
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question-toggle" onClick={toggleAccordion}>
        <h4>{question}</h4>
        {/* The icon changes (rotates) based on the 'open' class in CSS */}
        <i className="fa-solid fa-chevron-down"></i> 
      </div>
      {/* The answer content - CSS will control its height/visibility */}
      <p className="faq-answer">{answer}</p>
    </div>
  );
};

export default AccordionItem;