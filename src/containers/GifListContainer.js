import React from 'react'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {

  state = {
    imgList: [],
  }

  componentDidMount() {
    this.getGifs()
  }

  componentDidUpdate(prevProps) {
    console.log("GiftListContainer did update")
    if (this.props.fetchValue !== prevProps.fetchValue) {
      this.getGifs()
    }
  }
  
  getGifs() {
    console.log("F E T C H I N G ! ! ! !")
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.props.fetchValue}&api_key=${this.props.apiKey}&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      const imgList = json.data.map(item => item.images.original.url)
      this.setState({
        imgList
      })
    })
  }

  render() {
    console.log("rendering GifListContainer")
    return (
      <div className="gifList container">
        <GifList imgList={ this.state.imgList }  />
      </div>
    )
  }
}

export default GifListContainer
