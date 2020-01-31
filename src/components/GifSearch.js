import React from 'react'


class GifSearch extends React.Component {

  changeHandler = (event) => {
    this.props.changeQValue(event.target.value)
    console.log(event.target.value)
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.changeQValue(this.props.qValue)
  }

  render() {
    
    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-sm-3 my-1">
            <input onChange={this.changeHandler} type="text" className="form-control" id="q" placeholder="Search..." value={this.props.qValue} />
          </div>
          <div className="col-auto my-1">
            <button onSubmit={this.submitHandler} type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      

    )
  }
}

export default GifSearch
