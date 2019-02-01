import React from 'react'

function SearchSuggestions(props) {
    return (
        <li key={props.key}>
            {props.book.title + ' - ' + props.book.author_name}
        </li>
    )
}

export default SearchSuggestions