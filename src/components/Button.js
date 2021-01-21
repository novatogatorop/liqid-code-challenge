import React from 'react';
import "./Button.css"

const STYLE = [
  "btn--primary",
  "btn--secondary",
  "btn--tertiary"
]

const Button = ({
  title,
  img,
  alt,
  onClick,
  buttonStyle
}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick}>
      {title}
      <img src={img} alt={alt} className="btn-img" />
    </button>
  );
}

export default Button;