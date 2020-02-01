import React from 'react'

function GifSearch (props) {

    return (
        <form onSubmit={(event) => props.submitHandler(event)}>
            <input onChange={props.handleChange} value={props.gifQuery} type="text" placeholder="Search"/>
            <input type="submit" />
        </form>
    )
}

export default GifSearch