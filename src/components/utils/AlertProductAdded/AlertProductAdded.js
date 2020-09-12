import React from "react"
import "../style/AlertProductAdded.css"
import { useStateValue } from "../../../StateProvider"
import { useHistory } from "react-router-dom"

function AlertProductAddedContainer() {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()
  const closeAlertWindow = () => {
    dispatch({
      type: "RESET_CLICK_BASKET_ACTION_TO_FALSE",
    })
  }
  const moveToCheckout = () => {
    dispatch({
      type: "RESET_CLICK_BASKET_ACTION_TO_FALSE",
    })
    history.push("/checkout")
  }
  return (
    <div className="alertProductAddedContainer">
      <button className="closeAlertWindow" onClick={closeAlertWindow}>
        close
      </button>
      {basket.map((item) => (
        <AlertProductAdded id={item.id} title={item.title} image={item.image} quantity={item.quantity} dispatch={dispatch} />
      ))}
      <button className="moveToCheckout" onClick={moveToCheckout}>
        Move To Checkout Page
      </button>
    </div>
  )
}

function AlertProductAdded({ image, title, quantity, id, dispatch }) {
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      removeItem: {
        id: id,
      },
    })
  }
  return (
    <div className="alertProductAdded">
      <img className="product__image" src={image} alt="" />
      <p className="product__title">{title}</p>
      <p className="product__quantity">{`quantity: ${quantity}`}</p>
      <button onClick={removeFromBasket}>cancel</button>
    </div>
  )
}

export default AlertProductAddedContainer
