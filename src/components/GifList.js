import React from 'react'


class GifList extends React.Component {


  render() {
    return (
      <div className="row">
        {this.props.imgList.map((item, index) => <div className="col-sm" key={index}>
          <img alt="giphy gif" src={item} className="img-thumbnail" style={{width: '300px'}} />
        </div>)}
      </div>
    )
  }
}

export default GifList
