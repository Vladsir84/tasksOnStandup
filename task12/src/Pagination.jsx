import React from 'react';

const Pagination = (props) => {
    const { currentPage, goPrev, goNext, totalItems, itemsPerPage } = props;
    const isPrevPageAvailable = currentPage > 0;
    const isNextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

    return (

        <div className="pagination">
            <button
                onClick={goPrev}
                className="btn"
                type="button"
                disabled={!isPrevPageAvailable}
                >
                
                {isPrevPageAvailable && "←"}
            
            </button>
            <span className="pagination__page">{currentPage + 1}</span>
            <button
                onClick={goNext}
                className="btn"
                disabled={!isNextPageAvailable}
                type="button"
                >
                {isNextPageAvailable && "→"}
            </button>
        </div>
    );
};

export default Pagination;



