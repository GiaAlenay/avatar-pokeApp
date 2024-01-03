import "./Pagination.css";
import { useNavigate } from "react-router-dom";
export const Pagination = ({ total, currentPage }) => {
  const itemsPerPage = 20;
  const navigate = useNavigate();

  const totalPages = Math.ceil(total / itemsPerPage);

  const adjustedCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginationButtons = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((n) => n >= adjustedCurrentPage - 1 && n <= adjustedCurrentPage + 3)
    .map((n) => (
      <button
        key={n}
        name={n}
        className={`pageBtn ${adjustedCurrentPage === n && "current"}`}
        onClick={(e) => navigate(`/?page=${n}`)}
      >
        {n}
      </button>
    ));

  return (
    <div className="upperBtn">
      {adjustedCurrentPage !== 1 && (
        <button
          name="prev"
          className="prevBtn"
          onClick={() => navigate(`/?page=${adjustedCurrentPage - 1}`)}
        >
          .
        </button>
      )}
      {paginationButtons}
      {adjustedCurrentPage < totalPages && (
        <button
          name="next"
          className="nextBtn"
          onClick={() => navigate(`/?page=${adjustedCurrentPage + 1}`)}
        >
          .
        </button>
      )}
    </div>
  );
};
