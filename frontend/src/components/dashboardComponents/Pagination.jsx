import { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [showMoreFrom, setShowMoreFrom] = useState(null);

  // Update showMoreFrom when currentPage changes
  useEffect(() => {
    if (
      currentPage > 10 &&
      (!showMoreFrom || currentPage < showMoreFrom || currentPage > showMoreFrom + 9)
    ) {
      // Calculate the start of the current decade (11-20, 21-30, etc.)
      const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
      setShowMoreFrom(startPage);
    } else if (currentPage <= 10) {
      setShowMoreFrom(null);
    }
  }, [currentPage]);

  // Function to generate page numbers array
  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 10) {
      // Show all pages if total is 10 or less
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (!showMoreFrom) {
        // Show first 10 pages
        pages = Array.from({ length: 10 }, (_, i) => i + 1);
      } else {
        // Show set of 10 pages starting from showMoreFrom
        const remainingPages = totalPages - showMoreFrom + 1;
        const length = Math.min(10, remainingPages);
        pages = Array.from({ length }, (_, i) => showMoreFrom + i);
      }
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLoadMore = (lastVisiblePage) => {
    const nextStartPage = lastVisiblePage + 1;
    setShowMoreFrom(nextStartPage);
    onPageChange(nextStartPage);
  };

  const pageNumbers = getPageNumbers();
  const showLoadMore = totalPages > 10 && (!showMoreFrom || showMoreFrom + 9 < totalPages);

  return (
    <nav className="flex items-center justify-center space-x-2 mt-5">
      {
        totalPages > 1 && (
          <>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="h-8 w-8 flex items-center justify-center"
            >
        <LuChevronLeft className="h-4 w-4" />
      </button>

      <div className="flex items-center space-x-1">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`h-8 w-8 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-300 ease-in-out ${
              currentPage === pageNumber ? "bg-green-500 text-white  hover:bg-green-600  focus:ring-green-400 " : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        {showLoadMore && (
          <>
            <span className="px-2">...</span>
            <button
              className="h-8"
              onClick={() => handleLoadMore(pageNumbers[pageNumbers.length - 1])}
            >
              Load More
            </button>
          </>
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="h-8 w-8 flex items-center justify-center"
      >
        <LuChevronRight className="h-4 w-4" />
      </button>
          </>
        )
      }
    </nav>
  );
};

export default Pagination;
