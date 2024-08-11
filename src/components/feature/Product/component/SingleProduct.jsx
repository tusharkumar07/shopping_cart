import { useNavigate, useParams } from "react-router-dom";
import "../../../../assets/css/single_product.css";

import useSingleProduct from "../hooks/useSingleProduct";
import LinkButton from "../../../ui/button/LinkButton";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CartCounter from "./CartCounter";

import { checkCartItem, getCart, setCart } from "../../../../services/storage";
import formatPrice from "../../../../utils/formatPrice";

const SingleProduct = ({ onCartChange }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { product } = useSingleProduct(productId);
  // useEffect(() => {
  //   document.title = name;

  //   if (Object.keys(product).length === 0) {
  //     toast.error("Cannot find the item that you are looking for.", {
  //       autoClose: 2500,
  //       toastId: "Single Product",
  //     });
  //     return navigate("/products");
  //   }
  // }, []);

  const {
    brand,
    color,

    desc,
    id,
    img,
    name,
    price,
    size,
    stock,
    sku,
  } = product;

  const [itemQuantity, setItemQuantity] = useState(1);
  const [cartDetail] = useState({
    id: 0,
    img: "",
    name: "",
    color: "",
    price: "",
    quantity: "",
    subTotal: "",
  });

  const handleItemQuanity = (quantity) => {
    setItemQuantity(quantity);
  };

  const handleAddCart = () => {
    const currentCart = getCart();

    const cartItem = checkCartItem(id);

    if (cartItem) {
      const newArr = [...currentCart];

      const index = newArr.findIndex((item) => item.id === id);
      newArr[index].quantity += itemQuantity;
      newArr[index].subTotal = parseInt(price) * newArr[index].quantity;

      return setCart("cart", newArr);
    }

    const newCart = { ...cartDetail };
    newCart.id = id;
    newCart.name = name;
    newCart.img = img;
    newCart.color = color;
    newCart.price = price;
    newCart.quantity = itemQuantity;
    newCart.subTotal = parseInt(price) * itemQuantity;
    currentCart.push(newCart);
    onCartChange(currentCart);
    setCart("cart", currentCart);
  };

  const renderContent = () => {
    if (!product) return;

    if (brand)
      return (
        <div className="single_product">
          <div className="container">
            <LinkButton
              path="/products"
              label="Go Back to All Products"
              className="product_goBack_btn"
            />
            <div className="single_product_container">
              <div className="single_product_left">
                <div className="img">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="single_product_right">
                <h1 className="product_name">{name}</h1>
                <p className="product_price">₱{formatPrice(price)}</p>
                <p className="product_desc">{desc}</p>

                <div className="product_section">
                  <p className="product_section_title">Availabilty: </p>
                  <p className="product_section_data">{stock}</p>
                </div>

                <div className="product_section">
                  <p className="product_section_title">SKU: </p>
                  <p className="product_section_data">{sku}</p>
                </div>

                <div className="product_section">
                  <p className="product_section_title">Brand: </p>
                  <p className="product_section_data">{brand.name}</p>
                </div>

                <div className="product_section">
                  <p className="product_section_title">Size: </p>
                  <p className="product_section_data">{size}</p>
                </div>

                <div className="product_section">
                  <p className="product_section_title">Color: </p>
                  <p className="product_section_data">{color}</p>
                </div>
                <CartCounter
                  itemQuantity={itemQuantity}
                  onQuantityChange={handleItemQuanity}
                />

                <LinkButton
                  label="Add to Cart"
                  path="/cart"
                  btnEvent={handleAddCart}
                  className="product_cart_btn"
                />
                {/* <Button text="Add To Cart" btnEvent={handleAddCart} /> */}
              </div>
            </div>
          </div>
        </div>
      );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default SingleProduct;
