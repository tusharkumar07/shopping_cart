const filterData = (currentCategory, currentBrand, data, search) => {
  let filterData = data;

  if (search) {
    filterData = data.filter((item) => {
      return item.name.toLowerCase().trim().includes(search.toLowerCase());
    });
  } else if (
    currentCategory &&
    currentCategory.id &&
    currentBrand !== "All Brand"
  ) {
    filterData = data.filter((item) => {
      return (
        item.brand.name === currentBrand &&
        item.category.id === currentCategory.id
      );
    });
  } else if (currentBrand !== "All Brand") {
    filterData = data.filter((item) => {
      return item.brand.name === currentBrand;
    });
  } else if (currentCategory && currentCategory.id) {
    filterData = data.filter((item) => {
      return item.category.id === currentCategory.id;
    });
  }
  return filterData;
};

export default filterData;
