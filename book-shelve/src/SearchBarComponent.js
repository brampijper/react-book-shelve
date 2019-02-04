import React from 'react'
import './SearchBar.css';

function SearchBarComponent(props) {
    return (
        <div className="center-align">
            <div className="center-elements">
                <h1> Search your favourite books</h1>
                <input
                    className="search-input center-align"
                    type="text"
                    placeholder="Search on titles, author, bsn number..."
                    name="searchTerm"
                    onChange={props.handleChange}
                    value={props.searchTerm}
                />                
            </div>
        </div>
    )
}

export default SearchBarComponent   