import "../../../assets/css/cart_empty.css";
import LinkButton from "../../ui/button/LinkButton";

const CartEmpty = () => {
  return (
    <div className="empty_cart container">
      <h1>The Cart is Empty. Fill it in!</h1>

      <LinkButton path="/products" label="Look For An Item" />
    </div>
  );
};

export default CartEmpty;
