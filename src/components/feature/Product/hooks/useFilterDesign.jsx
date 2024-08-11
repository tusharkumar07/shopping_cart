import { useEffect, useState } from "react";

const useFilterDesign = () => {
  const [filterMaxScroll, setFilterMaxScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 187) return setFilterMaxScroll(true);
    setFilterMaxScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return { filterMaxScroll };
};

export default useFilterDesign;
