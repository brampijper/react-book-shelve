import React, {Component} from 'react'
import SearchBarComponent from './SearchBarComponent'
import _ from 'lodash'
import SearchSuggestions from './SearchSuggestions';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            searchResults: [],
            filterResults: []
        }
        this.delayedCallback = _.debounce(this.searchBooks, 250)
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.delayedCallback(value)
        this.setState({
            [name] : value
        })
    }

    searchBooks = (value) => {
        fetch(`http://openlibrary.org/search.json?title=${value}`)
        .then(response => response.json()
        .then(response => {
            this.setState({ searchResults: response.docs})
            const suggestionItems = response.docs.slice(0,5).map(book => {
                return <SearchSuggestions key={book.id} book={book} />
            })
            return suggestionItems

        }))
    }
    
    render() {
        return (
            <div> 
                <SearchBarComponent
                    handleChange={this.handleChange}
                    searchTerm={this.state.searchTerm}    
                />
                <ul className="search-results">
                    {this.suggestionsItems}
                </ul>
            </div> 
        )
    }
}

export default SearchBar