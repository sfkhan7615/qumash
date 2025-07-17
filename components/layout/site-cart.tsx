"use client";
import { useState } from "react";
import Link from "next/link";

export default function SiteCart() {
  // Initialize the state for the cart items with quantity and price
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sleeve Kimono Dress",
      variant: "Black / XL",
      price: 59.00,
      quantity: 1,
      image: "/images/product-images/cape-dress-1.jpg",
    },
    {
      id: 2,
      name: "Elastic Waist Dress",
      variant: "Gray / XXL",
      price: 99.00,
      quantity: 1,
      image: "/images/product-images/cape-dress-2.jpg",
    }
  ]);

  // Update the quantity of an item in the cart
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle quantity increment
  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle quantity decrement
  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="site-cart">
      <a href="#;" className="site-header__cart" title="Cart">
        <i className="icon anm anm-bag-l"></i>
        <span id="CartCount" className="site-header__cart-count" data-cart-render="item_count">
          {cartItems.reduce((acc, item) => acc + item.quantity, 0)} {/* Total items */}
        </span>
      </a>
      {/* Minicart Popup */}
      <div id="header-cart" className="block block-cart">
        <ul className="mini-products-list">
          {cartItems.map((item) => (
            <li className="item" key={item.id}>
              <a className="product-image" href="#">
                <img src={item.image} alt={item.name} title={item.name} />
              </a>
              <div className="product-details">
                <a href="#" className="remove">
                  <i className="anm anm-times-l" aria-hidden="true"></i>
                </a>
                <a href="#" className="edit-i remove">
                  <i className="anm anm-edit" aria-hidden="true"></i>
                </a>
                <a className="pName" href="cart.html">{item.name}</a>
                <div className="variant-cart">{item.variant}</div>
                <div className="wrapQtyBtn">
                  <div className="qtyField">
                    <span className="label">Qty:</span>
                    <button
                      className="qtyBtn minus"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      <i className="fa anm anm-minus-r" aria-hidden="true"></i>
                    </button>
                    <input
                      type="text"
                      id="Quantity"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                      className="product-form__input qty"
                    />
                    <button
                      className="qtyBtn plus"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      <i className="fa anm anm-plus-r" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="priceRow">
                  <div className="product-price">
                    <span className="money">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="total">
          <div className="total-in">
            <span className="label">Cart Subtotal:</span>
            <span className="product-price">
              <span className="money">${calculateTotal().toFixed(2)}</span>
            </span>
          </div>
          <div className="buttonSet text-center">
            <Link href="/cart" className="btn btn-secondary btn--small">View Cart</Link>
            <Link href="/checkout" className="btn btn-secondary btn--small">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
