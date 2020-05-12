import React from 'react';

const Pagination = (props) => {
    const { currentPage, goPrev, goNext, totalItems, itemsPerPage } = props;
    const prevPageAvailable = currentPage > 0;
    const nextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

    return (

        <div className="pagination">
            <button
                onClick={goPrev}
                className="btn"
                type="button"
                disabled={!prevPageAvailable}>
                {prevPageAvailable && "←"}
            </button>
            <span className="pagination__page">{currentPage + 1}</span>
            <button
                onClick={goNext}
                className="btn"
                disabled={!nextPageAvailable}
                type="button">
                {nextPageAvailable && "→"}
            </button>
        </div>
    )
}

export default Pagination;



