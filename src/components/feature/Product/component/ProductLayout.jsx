import Filter from "../../../common/Filter";
import { useProduct } from "../hooks/useProduct";
import ProductList from "./ProductList";
import "../../../../assets/css/product_layout.css";
import React, { useEffect, useState } from "react";
import useFilterDesign from "../hooks/useFilterDesign";
import categories from "../../../../data/category";
import brands from "../../../../data/brand";
import filterData from "../../../../utils/filterData";
import SearchBar from "../../../common/SearchBar";
import CurrentItemsLabel from "../../../common/CurrentItemsLabel";
import NoItem from "../../../common/NoItem";
import Paginate from "../../../common/Paginate";
import { paginate } from "../../../../utils/paginate";

const ProductLayout = () => {
  const { products } = useProduct();
  const { filterMaxScroll } = useFilterDesign();
  const [state, setState] = useState({
    data: [],
    brands: [],
    currentBrand: "All Brand",
    category: [],
    pageSize: 5,
    currentPage: 1,
    currentCategory: "All Categories",
    search: "",
  });

  useEffect(() => {
    document.title = "Products";

    setState({
      ...state,
      data: products,
      category: [{ name: "All Categories" }, ...categories],

      brands: [{ name: "All Brand" }, ...brands],
    });
  }, [products]);

  const handleSearch = (search) => {
    setState({
      ...state,
      search,
      currentBrand: "All Brand",
      currentCategory: "All Categories",
    });
  };

  const handlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };

  const handleCategoryChange = (category) => {
    setState({
      ...state,
      currentCategory: category,
      search: "",
      currentPage: 1,
    });
  };

  const handleBrandChange = (e) => {
    setState({
      ...state,
      currentBrand: e.target.value,
      search: "",
      currentPage: 1,
    });
  };

  const handleClearFilter = () => {
    setState({
      ...state,

      currentBrand: "All Brand",
      currentCategory: "All Categories",
    });
  };

  const renderContent = () => {
    const {
      data,
      currentCategory,
      currentBrand,
      pageSize,
      currentPage,
      search,
    } = state;

    let filteredData = filterData(currentCategory, currentBrand, data, search);
    const allProducts = paginate(filteredData, currentPage, pageSize);

    return (
      <div className="product_layout">
        <div className="product_layout_container">
          <div className="product_layout_left">
            <SearchBar search={search} onSearchChange={handleSearch} />
            <Filter
              filters={state}
              maxScroll={filterMaxScroll}
              onCategoryChange={handleCategoryChange}
              onBrandChange={handleBrandChange}
              onClearFilter={handleClearFilter}
            />
          </div>

          <div className="product_layout_right">
            <CurrentItemsLabel
              message={`${filteredData.length} Item${
                filteredData.length > 1 ? "s" : ""
              } was Found.`}
            />
            {filteredData.length === 0 ? (
              <NoItem />
            ) : (
              <ProductList products={allProducts} />
            )}
            <Paginate
              itemCount={filteredData.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default ProductLayout;
