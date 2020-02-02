import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'


// the App component should render out the GifListContainer component 
const apiKey = "oM1mndB09RMcNgUfMhKsQJQys99EifDI"


class App extends React.Component {
  
  state = {
    qValue: "",
    fetchValue: ""
  }

  changeQValue = (qValue) => {
    this.setState({
      qValue
    })
  }

  changeFetchValue = (fetchValue) => {
    this.setState({
      fetchValue
    })
  }

  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" changeQValue={this.changeQValue} changeFetchValue={this.changeFetchValue} qValue={this.state.qValue} />
        < GifListContainer apiKey={apiKey} fetchValue={this.state.fetchValue} />
      </div>
    )
  }
}

export default App
