import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends React.Component{
  state = {
    gifList: []
  }
  fetchData = (searchInput = "poop") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=r&limit=3`)
      .then(resp => resp.json())
      .then(data => this.setState({
        gifList: data.data
      })).catch(error => alert("Please try another search"))
  }
  // componentDidUpdate(prevState){
  //   if(this.state.searchInput !== prevState.searchInput){
  //     this.fetchData()
  //   }
  // }
  componentDidMount(){
    this.fetchData()
  }
  render(){
    return (
    <div>
      < GifSearch changeHandler={this.changeHandler} searchInput={this.state.searchInput} fetchData={this.fetchData}/>
      < GifList gifList={this.state.gifList}/>
    </div>
    )
  }
}
export default GifListContainer