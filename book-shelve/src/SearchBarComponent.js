import React from 'react'
import './SearchBar.css';

function SearchBarComponent(props) {
    return (
        <div className="center-align">
            <div className="center-elements">
                <h1> Search for your favourite books</h1>
                <input
                    className="search-input center-align"
                    type="text"
                    placeholder="Search on titles, author, bsn number..."
                    name="searchTerm"
                    onChange={props.handleChange}
                    value={props.searchTerm}
                />
                
                <ul className="search-results">
                {props.searchResults.map(item => 
                    <li
                        key={item.key}>
                            {item.title}
                    </li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default SearchBarComponent