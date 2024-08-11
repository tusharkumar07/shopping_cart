import brands from "../data/brand";

const randomBrand = () => {
  return brands[Math.floor(Math.random() * brands.length)];
};

export default randomBrand;
