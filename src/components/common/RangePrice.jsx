import React, { useState } from "react";
import formatPrice from "../../utils/formatPrice";

const RangePrice = ({ range, onRangeChange }) => {
  const style = {
    fontFamily: "sans-bold",
    color: "var(--black)",
    fontSize: "16px",
  };

  const [bg, setBg] = useState({});

  const handleRange = (e) => {
    onRangeChange(e.currentTarget.value);
    if (range)
      setBg({
        background: `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${
          range / 1000
        }%, #fff ${range / 1000}%, white 100%)`,
      });
  };

  return (
    <React.Fragment>
      <p style={style}>Current Value: ₱{formatPrice(range)}</p>
      <input
        style={bg}
        type="range"
        value={range}
        min={0}
        max={100000}
        onInput={handleRange}
      />
    </React.Fragment>
  );
};

export default RangePrice;
