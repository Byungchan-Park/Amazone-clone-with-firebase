import React from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../../StateProvider"

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()
  const calculatePrice = () => {
    return basket.map((product) => product.price * product.quantity).reduce((acc, cur) => acc + cur)
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} {basket.length === 1 ? "item" : "items"}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basket.length === 0 ? 0 : calculatePrice()} // part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
