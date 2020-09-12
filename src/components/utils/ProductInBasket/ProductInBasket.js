import React, { useState } from "react"
import "../style/ProductInBasket.css"
import { useStateValue } from "../../../StateProvider"

function ProductInBasket({ id, title, image, price, quantity, hideButton }) {
  const [amount, setAmount] = useState(quantity)
  const [state, dispatch] = useStateValue()
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      removeItem: {
        id: id,
      },
    })
  }
  const handleAmount = (event) => {
    const { value } = event.target
    setAmount(value)
    dispatch({
      type: "REFLECT_AMOUNT_TO_BASKET",
      item: {
        id: id,
        quantity: value,
      },
    })
  }
  return (
    <div className="product-in-basket">
      <div className="product-in-basket__info">
        <div className="product-in-basket__image">
          <img src={image} alt="" />
        </div>

        <p className="product-in-basket__title">{title}</p>
        <p className="product-in-basket__price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div class="product-in-basket__quantity">
          <input type="number" onChange={handleAmount} value={amount} min="1" />
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Remove</button>}

        <span className="product-in-basket__total">{price * quantity}</span>
      </div>
    </div>
  )
}

export default ProductInBasket
