import React from 'react'

function GifList (props) {
    
    return (
        <ul>
            {props.imageURLs.map(image => <li> <img alt="giphy gif" src={image} className="img-thumbnail" style={{width: '400px'}}/></li>)}
        </ul>
    )
}

export default GifList