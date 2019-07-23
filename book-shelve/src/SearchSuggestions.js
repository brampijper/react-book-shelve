import React from 'react'

function SearchSuggestions(props) {
    console.log(props)
    return (
        <div className="center-align">
            <ul className="center-elements search-suggestions">
                {props.searchResults.splice(0,5).map(book => (
                    
                    <a href="#" className="list-results" key={book.key}>
                        <li > 
                            {book.title + ' - ' + book.author_name}
                        </li>
                    </a>
                ))} 
            </ul>
        </div> 
    )
}

export default SearchSuggestions