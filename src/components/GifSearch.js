import React from 'react'

class GifSearch extends React.Component{
state = {
    query: "",
    gifs: []

}


handleSubmit(e){
    console.log(this.props)
    e.preventDefault()
this.props.getGifs(this.state.query)
}

    render() {
        console.log(this.props)
        return (
            <div className="searchForm">
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" value={this.state.query} placeholder="Search for..." onChange={e=>this.setState({query: e.target.value})} />
                </form>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default GifSearch