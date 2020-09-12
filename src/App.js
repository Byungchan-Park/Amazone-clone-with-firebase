import React, { useEffect } from "react"
import "./App.css"
import Header from "./components/utils/Header/Header"
import Home from "./components/pages/Home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./components/pages/Checkout/Checkout"
import Login from "./components/pages/Login/Login"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import MainNavBar from "./components/utils/MainNavBar/MainNavBar"
import AlertProductAddedContainer from "./components/utils/AlertProductAdded/AlertProductAdded"
import Payment from "./components/pages/Payment/Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./components/pages/Orders/Orders"

const promise = loadStripe("pk_test_51HQ7ubDg2EXQU618WaPa3FsrDm4Sp3CzQpEA0JOPIqotw5kXEnFZU5nJKbSvxnaVR2EvWygefcif2PCjPV3lKikT00qk1j4YDD")

function App() {
  const [{ basket, isClicked }, dispatch] = useStateValue()
  useEffect(() => {
    // will only run once when the app component loades...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <MainNavBar />
            {isClicked && <AlertProductAddedContainer />}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
