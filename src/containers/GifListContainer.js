import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends React.Component{

    state = {
        gifs: []
    }
    getGifs(query = "dolphins") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}%20HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json()
        .then(gifData=>{
          this.setState({gifs: gifData.data})
        })
        )
    }
    render(){
        return (
            <div>
                < GifList gifGifts={this.state.gifs} />
                < GifSearch getGifs={this.getGifs}/>
            </div>
        )

    }
componentDidMount(){
    this.getGifs()
}
}

export default GiftListContainer