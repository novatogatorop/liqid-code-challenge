import React, { Component } from 'react';
import "./Headline.css";

function Headline({
  title,
  description
}) {
  return (
    <>
      <div className="Headline">
        <div className="headline-title">
          <div className="rectangle">|</div>
          <div className="title">{title}</div>
        </div>
        <div className="headline-desc">
          {description}
        </div>
      </div>
    </>
  );
};

export default Headline;