import React, { useState } from 'react'
import css from "./Search.css";
import SearchResult from './SearchResult';

const Search = () => {

    const [img, setImg] = useState();
    console.log(img);

    return (
        <>
            <div className="search">
                <div className="search_input">
                    <input type="text" placeholder='Start Typing' value={img} onChange={(e) => { setImg(e.target.value) }} />
                </div>
                <SearchResult img={img} />
            </div>
        </>
    )
}

export default Search;

