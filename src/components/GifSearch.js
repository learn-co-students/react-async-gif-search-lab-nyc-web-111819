import React from 'react'

class GifSearch extends React.Component{

  state ={
    searchInput: ""
  }
  
  searchHandler = (e) => {
    e.preventDefault()
    console.log(this.state.searchInput)
    this.props.fetchData(this.state.searchInput)
  }

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.searchHandler} >
        <label>Enter a Search Term:
          <input value={this.state.searchInput} onChange={this.changeHandler}  type="text" placeholder="Search Gifs"/>
          </label>
          <input type="submit" value="Submit"/>
      </form>
    )
  }


}

export default GifSearch