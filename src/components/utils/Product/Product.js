import React from "react"
import "../style/Product.css"
import { useStateValue } from "../../../StateProvider"

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    // 버튼을 눌렀을 때 장바구니에 상품이 추가되는데
    // 1번째 방법 : 상품이 그대로 추가됨.
    // 2번째 방법 : 장바구니에 상품이 존재하면은 quantity만 늘린다.
    // 분기 처리를 하는 조건이 중요함.
    const isAdded = basket.some((product) => product.id === id)
    if (!isAdded) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          quantity: 1,
        },
      })
    } else {
      dispatch({
        type: "ADD_SAME_PRODUCT_TO_BASKET",
        item: {
          id: id,
        },
      })
    }
  }
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
