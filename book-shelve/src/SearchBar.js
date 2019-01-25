import React, {Component} from 'react'
import SearchBarComponent from './SearchBarComponent'
import _ from 'lodash'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            searchResults: []
        }
        this.delayedCallback = _.debounce(this.searchBooks, 500)
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
            console.log(response.docs)
            this.setState({ searchResults: response.docs})
        }))
    }
    
    render() {
        return (
            <SearchBarComponent
                handleChange={this.handleChange}
                searchTerm={this.state.searchTerm}
                searchResults={this.state.searchResults}    
            />
            
        )
    }
}

export default SearchBar