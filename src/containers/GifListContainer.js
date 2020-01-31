import React from 'react'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {

  state = {
    imgList: [],
  }

  componentDidMount() {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.props.qValue}&api_key=${this.props.apiKey}&rating=g`)
      .then(resp => resp.json())
      .then(json => {
        const imgList = json.data.map(item => item.images.original.url)
        this.setState({
          imgList
        })
      })
  }



  render() {
    return (
      <div className="gifList container">
        <GifList imgList={ this.state.imgList }  />
      </div>
    )
  }
}

export default GifListContainer
