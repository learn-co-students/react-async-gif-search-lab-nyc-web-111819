import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'


// the App component should render out the GifListContainer component 
const apiKey = "oM1mndB09RMcNgUfMhKsQJQys99EifDI"


class App extends React.Component {
  
  state = {
    qValue: ""
  }

  changeQValue = (qValue) => {
    this.setState({
      qValue: qValue
    })
  }

  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" changeQValue={this.changeQValue} qValue={this.state.qValue} />
        < GifListContainer apiKey={apiKey} qValue={this.state.qValue} />
      </div>
    )
  }
}

export default App
