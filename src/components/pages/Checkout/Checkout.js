import React from "react"
import "../style/Checkout.css"
import Subtotal from "../../Subtotal/Subtotal"
import { useStateValue } from "../../../StateProvider"
import ProductInBasket from "../../utils/ProductInBasket/ProductInBasket"

function Checkout({ page }) {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__top">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
          <div class="column-labels">
            <label class="product-image">Image</label>
            <label class="product-details">Product</label>
            <label class="product-price">Price</label>
            <label class="product-quantity">Quantity</label>
            <label class="product-removal">Remove</label>
            <label class="product-line-price">Total</label>
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
