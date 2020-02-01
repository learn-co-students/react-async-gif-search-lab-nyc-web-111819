import React from 'react'
import { render } from 'react-dom'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

    state = {
        imageURLs: [],
        gifQuery: ""
    }

    handleChange = (event) => {
        this.setState({
            gifQuery: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.getImages()
    }

    getImages = () => {
          fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.gifQuery}&api_key=qAZrVix5szpQsQS4TQd5lMZGnmDuvETj&limit=3`)
          .then(response => response.json())
          .then(gifData => this.getImageURLs(gifData))
    }

    getImageURLs = (gifData) => {
        let imageData = gifData.data.map(gif => gif.images.original.url)
        this.setState({
            imageURLs: imageData
        }) 
    }
    
    render() {
        return (
            <div> 
                <GifSearch submitHandler={this.submitHandler} gifQuery={this.state.gifQuery} handleChange={this.handleChange}/>
                <br />
                <GifList imageURLs={this.state.imageURLs}/>
            </div>
        )
    }
}

export default GifListContainer