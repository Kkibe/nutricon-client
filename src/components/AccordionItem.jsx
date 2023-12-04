import React, { useMemo, useState } from 'react'

function AccordionItem() {
    const data = {
        quiz: 'lorem ipsum dolo sit amet',
        ans: "desc",
        link : 'https://www.google.com/',
      }
    const {quiz, ans, link} = data;
  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                {quiz}
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" /*className="accordion-collapse collapse show"} aria-labelledby="headingOne" data-bs-parent="#accordionExample"*/>
            <div className="accordion-body">
            <strong>{ans} <a href={link}> Learn More</a></strong> 
            </div>
        </div>
    </div>
)}

export default AccordionItem
