import React from "react";
import "./App.css";
export function CustomArrows({ next, prev }) {
  return (
    <div className="custom-arrows">
      <div className="prev-arrow" onClick={prev}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="next-arrow" onClick={next}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
}
