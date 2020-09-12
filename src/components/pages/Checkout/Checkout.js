import React from "react"
import "../style/Checkout.css"
import Subtotal from "../../Subtotal/Subtotal"
import { useStateValue } from "../../../StateProvider"
import ProductInBasket from "../../utils/ProductInBasket/ProductInBasket"

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__top">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Shopping Cart</h2>
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>
          {basket.map((product, i) => (
            <ProductInBasket id={product.id} title={product.title} price={product.price} image={product.image} rating={product.rating} quantity={product.quantity} />
          ))}
        </div>
      </div>

      <div className="checkout__bottom">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
