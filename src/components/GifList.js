import React from 'react'

class GifList extends React.Component {
    
    render() {
        return(
            <ul>
                {this.props.gifData.map(gif => <li key={gif.id}><img height="200px" width="200px" src={gif.images.original.url}/></li>)}
            </ul>
        ) 
    }

}

export default GifList