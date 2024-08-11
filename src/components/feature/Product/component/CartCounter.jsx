import Button from "../../../ui/button/Button";
import "../../../../assets/css/cart_counter.css";
import { useState } from "react";

const CartCounter = ({ itemQuantity, onQuantityChange }) => {
  const handleAddItem = () => {
    onQuantityChange(itemQuantity + 1);
  };

  const hanndleRemoveItem = () => {
    if (itemQuantity === 1) return onQuantityChange(1);
    onQuantityChange(itemQuantity - 1);
  };

  return (
    <div className="counter_container">
      <Button text="+" btnEvent={handleAddItem} />
      <h3>{itemQuantity}</h3>
      <Button text="-" btnEvent={hanndleRemoveItem} />
    </div>
  );
};

export default CartCounter;
