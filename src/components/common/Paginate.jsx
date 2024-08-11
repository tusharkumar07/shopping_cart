import _ from "lodash";
import "../../assets/css/paginate.css";

const Paginate = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <div className="paginate">
      <ul>
        {pages.map((page) => {
          return (
            <li
              className={`${currentPage === page ? "active" : ""} `}
              onClick={() => onPageChange(page)}
              key={page}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
