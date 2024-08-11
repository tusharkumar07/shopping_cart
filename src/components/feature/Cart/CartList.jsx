import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../../../assets/css/cart_list.css";
import { deleteCart, getCart } from "../../../services/storage";
import Button from "../../ui/button/Button";
import LinkButton from "../../ui/button/LinkButton";

import CartBody from "./CartBody";
import CartEmpty from "./CartEmpty";
import CartHeaders from "./CartHeaders";
import CheckOutBox from "./CheckoutBox";
import useTotalPrice from "./useTotalPrice";
import cart_header from "./utils/cartHeader";

const CartList = ({ onCartChange }) => {
  const cart = getCart();
  const { total } = useTotalPrice(cart);
  const [currCart, setCurrCart] = useState(cart);
  const [allTotal, setAllTotal] = useState(total);
  const [toggler, setToggler] = useState(0);

  useEffect(() => {
    document.title = "Cart List";
    setAllTotal(total);
    setCurrCart(cart);
  }, [total]);

  const handleCartChange = (cart) => {
    setCurrCart(cart);
    onCartChange(cart);
  };

  const handleAllPrice = (price) => {
    setToggler(price);
  };

  const handleClearCart = () => {
    setToggler(1);
    deleteCart("cart");
    onCartChange([]);
  };

  const handleCheckOut = () => {
    toast.success("Successfully Checked Out the Items. Thank You for buying!", {
      autoClose: 2500,
    });
    onCartChange([]);
    deleteCart("cart");
  };

  const renderCartBody = () => {
    return currCart.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <CartBody
            data={item}
            onCartChange={handleCartChange}
            onAllPriceChange={handleAllPrice}
          />
        </React.Fragment>
      );
    });
  };

  const renderContent = () => {
    if (cart.length === 0) {
      return <CartEmpty />;
    }

    return (
      <div className="cart">
        <div className="container">
          <table>
            <thead>
              <CartHeaders headers={cart_header} />
            </thead>
            <tbody>{renderCartBody()}</tbody>
          </table>

          <hr />
          <div className="cart_util_btn">
            <LinkButton
              path="/products"
              label=" All Products"
              className="cart_list_btn"
            />
            <Button
              text="Clear Shopping Cart"
              className="cart_list_btn"
              btnEvent={handleClearCart}
            />
          </div>

          <CheckOutBox cart={currCart} allPrice={allTotal} />

          <div className="checkout_btn">
            <LinkButton
              label="Checkout"
              path="/"
              className="cart_list_btn"
              btnEvent={handleCheckOut}
            />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default CartList;
