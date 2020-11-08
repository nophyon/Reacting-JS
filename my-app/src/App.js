import './App.css';
import React, {Component} from 'react';
import Table from './Components/Table/table'

const url = "https://swapi.dev/api/people/1";

class App extends Component {

  //Setting state
  state = {
    swapi: {},
    film: {}
  }

  //method to call API
  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ swapi: data })
    })
    .catch(console.log)
  }

  //rendering imported JSX  with state data
  render () {
    return (
      <Table swapi={this.state.swapi} />
    );
  }
}


export default App
