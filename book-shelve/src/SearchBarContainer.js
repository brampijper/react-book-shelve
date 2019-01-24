import React, {Component} from 'react'
import SearchBarComponent from './SearchBarComponent'

class SearchBar extends Component {
    constructor() {
        super()
        this.state={searchTerm: ''}
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <SearchBarComponent
                handleChange={this.handleChange}
                searchTerm={this.state.searchTerm}    
            />

        )
    }
}

export default SearchBar