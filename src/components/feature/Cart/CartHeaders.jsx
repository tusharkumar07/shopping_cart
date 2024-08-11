const CartHeaders = ({ headers }) => {
  const renderHeaders = headers.map((item) => {
    return (
      <th className={item.class} key={item.name}>
        {item.name}
      </th>
    );
  });

  return (
    <>
      <tr className="cart_headers">{renderHeaders}</tr>
    </>
  );
};

export default CartHeaders;
