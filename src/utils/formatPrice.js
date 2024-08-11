const formatPrice = (price) => {
  return new Intl.NumberFormat().format(price);
};

export default formatPrice;
