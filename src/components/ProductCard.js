import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCard.css";
import Button from "./Button";

function ProductCard({
  name,
  price,
  percentage
}) {
  return (
    <>
      <div className="ProductCard">
        <div className="name">{name}</div>
        <div className="value">
        	<div className="price">{price}</div>
        	<div className="percentage">{percentage}</div>
        </div>
        <Button buttonStyle="btn--primary">
        </Button>
      </div>
    </>
  );
};

export default ProductCard;