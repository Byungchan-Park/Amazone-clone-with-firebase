import React from "react"
import "../style/Order.css"
import moment from "moment"
import ProductInBasket from "../ProductInBasket/ProductInBasket"
import CurrencyFormat from "react-currency-format"

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <ProductInBasket id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} quantity={item.quantity} hideButton />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  )
}

export default Order
