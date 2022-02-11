import React from "react";

const SearchBox = ({ searchChange }) => {
    return(
        <div className="tc pa2">
            <input 
                className="pa3 ba b--green bh-lightest-blue"
                type="search" 
                placeholder="search your robot" 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;