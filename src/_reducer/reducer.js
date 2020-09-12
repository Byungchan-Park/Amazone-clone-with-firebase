export const initialState = {
  basket: [],
  user: null,
  productList: [
    {
      id: "12321341",
      title: "The Lean Startup:How Constant Innovation Creates Radically Successful Business Paperback",
      price: 11.96,
      image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
      rating: 5,
    },
    {
      id: "49538094",
      title: "Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel",
      price: 499.99,
      image: "https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UY218_.jpg",
      rating: 5,
    },
    {
      id: "4903850",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 199.99,
      image: "https://images-eu.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
      rating: 3,
    },
    {
      id: "23445930",
      title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      image: "https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg",
      rating: 5,
    },
    {
      id: "3254354345",
      title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      image: "https://m.media-amazon.com/images/I/41wFyW8SdhL._AC_UY218_.jpg",
      rating: 4,
    },
    {
      id: "90829332",
      title: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
      price: 598.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
      rating: 4,
    },
    {
      id: "90821632",
      title: "Apple AirPods Pro (Renewed)",
      price: 207.99,
      image: "https://m.media-amazon.com/images/I/71eGsUPZm2L._AC_UY327_FMwebp_QL65_.jpg",
      rating: 4,
    },
    {
      id: "90281632",
      title: "Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)",
      price: 274.98,
      image: "https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg",
      rating: 4,
    },
    {
      id: "12345678",
      title: "2020 Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray",
      price: 1699,
      image: "https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 5,
    },
    {
      id: "12365478",
      title: "JBL Flip 4 Waterproof Portable Bluetooth Speaker - Black, Medium (JBLFLIP4BK)",
      price: 79.99,
      image: "https://m.media-amazon.com/images/I/61d5F64UDpL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4,
    },
  ],
  isClicked: false,
}

export const getTotalBasket = (basket) => basket?.reduce((amount, item) => item.price * item.quantity + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case "ADD_SAME_PRODUCT_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket].map((product) => (product.id === action.item.id ? { ...product, quantity: product.quantity + 1 } : product)),
      }
    case "REFLECT_AMOUNT_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket].map((product) => (product.id === action.item.id ? { ...product, quantity: action.item.quantity } : product)),
      }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.removeItem.id),
      }
    case "REMOVE_ALL":
      return {
        ...state,
        basket: [],
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "CLICK_BASKET_BTN":
      return {
        ...state,
        isClicked: true,
      }
    case "RESET_CLICK_BASKET_ACTION_TO_FALSE":
      return {
        ...state,
        isClicked: false,
      }
    default:
      return state
  }
}

export default reducer
