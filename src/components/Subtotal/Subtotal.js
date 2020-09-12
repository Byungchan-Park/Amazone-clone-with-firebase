import React from "react"
import { useHistory } from "react-router-dom"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../../StateProvider"
import { getTotalBasket } from "../../_reducer/reducer"

function Subtotal() {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()
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
        value={basket.length === 0 ? 0 : getTotalBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => history.push("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
