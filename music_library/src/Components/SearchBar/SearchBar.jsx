import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className="searchBar">
        <input type='text' name='search' value = {props.termToFilter} onChange={props.handleChange}/>
        <button type= 'submit'  onClick={()=>{props.filterSongs(" ")}}>Search By Genre</button>
        </div>
    )
}

export default SearchBar;