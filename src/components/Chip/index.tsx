import React from 'react'
import "./chip.css"

type chipProps = {
  cost: String;
  isDiscount : boolean;
}

function index({ cost,isDiscount }: chipProps) {
  return (
    <div className="chip-container">
      <div className="chip-text">${cost}</div>
     { isDiscount && <div className="percent-text">+10%</div>}
    </div>
  )
}

export default index