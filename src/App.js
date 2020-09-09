import React from "react"
import "./App.css"
import Header from "./components/utils/Header/Header"
import Home from "./components/pages/Home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./components/pages/Checkout/Checkout"

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home page="home" />
          </Route>
          <Route path="/checkout">
            <Checkout page="checkout" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
