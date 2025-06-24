import { useState } from 'react';

function Filter({ onSelectRange }) {
    const priceRanges = [
        { min: 1200, max: 2100, label: "1200 - 2100" },
        { min: 2100, max: 3100, label: "2100 - 3100" },
        { min: 3100, max: 4100, label: "3100 - 4100" },
        { min: 4100, max: 6400, label: "4100 - 6400" }
    ];

    return (
        <div className="filterData-div">
            <div className="filter-by-price">
                <div className="heading-filter">
                    <p>Price Range</p>
                </div>
                <div className="input-filter-options">
                    {priceRanges.map((range, index) => (
                        <button
                            key={index}
                            className="options"
                            onClick={() => onSelectRange(range.min, range.max)}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Filter;
