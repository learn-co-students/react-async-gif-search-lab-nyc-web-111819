import React from 'react'

class GifList extends React.Component {


  render (){
    // if (this.props.gifList.length == 0) 
    let pictures = this.props.gifList.map(gif => <p key={gif.id}><img alt="damn!"src={gif.images.original.url}/></p>)


    return (
      <ul>
        {pictures}
      </ul>
    )
  }


}

export default GifList