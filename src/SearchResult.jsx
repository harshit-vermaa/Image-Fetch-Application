import React, { useEffect } from 'react';
import css from "./SearchResult.css";

const SearchResult = (props) => {

    const Link = `https://source.unsplash.com/1200x500/?${props.img}`;

    return (
        <>
            <div className="searchResult">
                <img src={Link} alt="IMG" />
            </div>
        </>
    )
}

export default SearchResult
