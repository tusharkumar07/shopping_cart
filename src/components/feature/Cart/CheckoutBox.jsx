import "../../../assets/css/checkout_box.css";
import formatPrice from "../../../utils/formatPrice";

const CheckOutBox = ({ cart, allPrice }) => {
  const shippingFee = 74;
  const total = allPrice + shippingFee;
  return (
    <div className="check_out">
      <div className="checkout_container">
        <h5>Subtotal:</h5>
        <h5>₱{formatPrice(allPrice)}</h5>
      </div>
      <div className="checkout_container">
        <h5>Shipping Fee:</h5>
        <h5>₱{shippingFee}</h5>
      </div>

      <hr />
      <div className="checkout_container">
        <h3>Total: </h3>
        <h3 className="checkout_total">₱{formatPrice(total)}</h3>
      </div>
    </div>
  );
};

export default CheckOutBox;
