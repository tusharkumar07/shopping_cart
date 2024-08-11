import "../../../../assets/css/product_card.css";
import formatPrice from "../../../../utils/formatPrice";
import LinkButton from "../../../ui/button/LinkButton";

const ProductCard = ({ data }) => {
  const {
    brand,
    color,
    category,
    desc,
    id,
    img,
    name,
    price,
    size,
    stock,
    sku,
  } = data;

  return (
    <div className="product_card">
      <div className="product_img">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="product_details">
        <div className="product_card_container">
          <h3>{name}</h3>
          <p>₱{formatPrice(price)}</p>
        </div>
        <LinkButton path={`/products/${id}`} label="See More Details" />
      </div>
    </div>
  );
};

export default ProductCard;
