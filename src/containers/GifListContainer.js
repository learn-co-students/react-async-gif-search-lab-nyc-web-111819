import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifData: [],
        searchTerm: ''
    }
    
    componentDidMount() {
        this.getGifs()
    }
    
    searchGifs = (searchInput) => {
        this.setState({ searchTerm: searchInput }, () => this.getGifs())
    }
    
    render() {
        return (
            <div>
                < GifSearch searchGifs={this.searchGifs} />
                < GifList gifData={this.state.gifData} />
            </div>
        )
    }
    
    getGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(data => this.setState({gifData: data.data}))
    }
}

export default GifListContainer