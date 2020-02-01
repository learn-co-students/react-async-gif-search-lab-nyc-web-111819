import React from 'react'

function GifList (props) {
    
    return (
        <ul>
            {props.imageURLs.map(image => <li> <img src={image}/></li>)}
        </ul>
    )
}

export default GifList