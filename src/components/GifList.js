import React from 'react'

const GifList = props =>{
    console.log(props)
    return (
        <div>
            {props.gifGifts.map(gif => <img src={gif.images.original.url} key={gif.images.original.url} alt="Gif"/>)}
       </div>
    )
}
export default GifList