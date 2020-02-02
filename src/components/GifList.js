import React, { Component } from 'react'


class GifList extends Component {

  render(){
  let pictures = this.props.gifList.map(gif => <p className="gif" key={gif.id}><img alt="GIFFY GIF GIF" src={gif.images.original.url}/></p>)


    return (
      <ul>
        {pictures}
      </ul>
    )
  }
}

export default GifList