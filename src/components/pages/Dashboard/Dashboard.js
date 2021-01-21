import React, { Component } from 'react';
import Headline from "../../Headline";
import { ProductList } from "./ProductList";
import Button from "../../Button";
import "./Dashboard.css";
import { 
  welcome, 
  investments,
  stocks,
  products,
  sortHighest,
  sortLowest } from "./Data";

class Dashboard extends Component {

  sortProduct = ProductList.sort((a, b) => (a.price > b.price ? 1 : -1));

  render() {
    return (
      <div className="Dashboard">
        {/* INTRO */}
        <div className="intro">
          <div className="intro-col welcome">
            <div className="intro-welcome-wrapper">
              <Headline {...welcome} />
            </div>
          </div>
          <div className="intro-col info">
            <div className="intro-info-wrapper">
              <div className="info-box">
              <Headline {...investments} />
            </div>
            <div className="info-box">
              <Headline {...stocks} />
            </div>
            </div>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="product">
          <Headline {...products} />
          <div className="products-wrapper">
            <div className="sort-box">
              <div className="sort-title">Sort</div>
              <Button buttonStyle="btn--secondary" {...sortHighest} onClick={this.sortProduct} />
              <Button buttonStyle="btn--tertiary" {...sortLowest} />
            </div>
            <ul className="cards">
              {ProductList.map((product, index) => {
                return (
                  <li className="card">
                    <div className="name">{product.name}</div>
                    <div className="value">
                      <div className="price">{product.price}</div>
                      <div className="percentage">{product.percentage}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;