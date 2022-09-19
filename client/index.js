import React from "react";
import ReactDOM from "react-dom/client";

const Product = ({ title, quantity, price }) => {
  return React.createElement(
    "div",
    { className: "product" },
    React.createElement(
      "div",
      { className: "product-details" },
      [ React.createElement("h3", null, title),
        React.createElement("p", { className: "price" }, `$${price}`),
        React.createElement("p", {className: "quantity"})
        ,div,a ]))
}

const App = () => {
  let header = React.createElement(
    "header",
    null,
    [
      React.createElement("h1", null, "The Shop!"),
      React.createElement(
        "div",
        { className: "cart" },
        [
          React.createElement("h2", null, "Your Cart"),
          React.createElement("p", null, "Your cart is empty"),
          React.createElement("p", null, "Your total: $0"),
          React.createElement("a", { className: "button checkout disabled" }, "Checkout")
      ])
    ]
  ); 

  let main = React.createElement(
    "main",
    null,
    [
      React.createElement(
        "div",
        { className: "product-listing" },
        [
          React.createElement("h2", null, "Products"), Products  /// 
        ]
      ),
      // // di 
    ]
  );

  return React.createElement("div", { id: 'app' }, [header, main]);
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());
/*
createElement  element/ props / children 