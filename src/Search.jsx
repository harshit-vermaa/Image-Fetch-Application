import React, { useState } from 'react'
import css from "./Search.css";
import SearchResult from './SearchResult';
import TextField from '@mui/material/TextField';

const Search = () => {

    const [img, setImg] = useState();
    console.log(img);

    return (
        <>
            <div className="search">
                <div className="search_input"> 
                    <TextField value={img} onChange={(e) => { setImg(e.target.value) }} id="outlined-basic" label="Start Typing" variant="outlined" />
                </div>
                <SearchResult img={img} />
            </div>
        </>
    )
}

export default Search;

