import React, { useState } from "react";
import { getCart, setCart } from "../../../services/storage";
import Button from "../../ui/button/Button";
import CartCounter from "../Product/component/CartCounter";
import updateCartQty from "./utils/UpdateCartQty";
import "../../../assets/css/cart_body.css";
import formatPrice from "../../../utils/formatPrice";
import { Link } from "react-router-dom";

const CartBody = ({ data, onCartChange, onAllPriceChange }) => {
  const cart = getCart();

  const { id, img, name, color, price, quantity, subTotal } = data;
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemSubTotal, setItemSubTotal] = useState(subTotal);

  const handleQuantityChange = (quantity) => {
    const itemSubTotal = updateCartQty(id, cart, quantity);
    onAllPriceChange(itemSubTotal);
    setItemQuantity(quantity);
    setItemSubTotal(itemSubTotal);
  };

  const handleDeleteItem = () => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart("cart", newCart);
    onCartChange(newCart);
  };

  return (
    <React.Fragment>
      <tr className="cart_body">
        <td className="table-width-100" data-label="Item">
          <div className="cart_item">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="details">
              <Link to={`/products/${id}`}>{name}</Link>

              <p>Color: {color}</p>
            </div>
          </div>
        </td>
        <td className="table-width-80" data-label="Price">
          <div className="cart_price">
            <h4>P{formatPrice(price)}</h4>
          </div>
        </td>
        <td className="table-width-80" data-label="Quantity">
          <div className="cart_quantity">
            <CartCounter
              itemQuantity={itemQuantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </td>
        <td className="table-width-80" data-label="Subtotal">
          <div className="cart_subtotal">
            <h4>P{formatPrice(itemSubTotal)}</h4>
          </div>
        </td>

        <td className="table-width-30">
          <div className="cart_del_btn">
            <Button text="Delete" btnEvent={handleDeleteItem} />
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default CartBody;
