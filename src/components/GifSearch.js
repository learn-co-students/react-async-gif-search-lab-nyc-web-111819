import React from 'react'

class GifSearch extends React.Component {
    // state = {
    //     searchTerm: ''
    // }

    clickHandler = (e) => {
        e.preventDefault()
        let searchInput = e.target.children[1].value.toLowerCase()
        // this.setState({searchTerm: searchInput})
        this.props.searchGifs(searchInput)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.clickHandler} value={this.searchInput}>
                    <label>Enter a Search Term</label>
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch