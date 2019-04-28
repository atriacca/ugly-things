import React, { Component } from 'react';
import Form from "./Form";

class App extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      description: "",
      image: "",
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState)=>{
      return {
        title: "",
        description: "",
        image: "",
        titles: [prevState.title, ...prevState.titles]
      }
    })
  }

handleSubmit(e, data){
  e.preventDefault();
  // make setState take a function so we can get at prevState
  this.setState({images: [data, /* spread prevState */]})
}

  render() {
    return (
      <div>
        <h1>Enter your submission</h1>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;