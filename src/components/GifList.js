import React from 'react'


class GifList extends React.Component {


  render() {
    return (
      <div className="row">
        {this.props.imgList.length === 0 && <h1>Use the Searchbox above to look for some GIFs!</h1>}
        {this.props.imgList.map((item, index) => <div className="col-sm" key={index}>
          <img alt="giphy gif" src={item} className="img-thumbnail" style={{width: '300px'}} />
        </div>)}
      </div>
    )
  }
}

export default GifList
