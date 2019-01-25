import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Top from './Top'
import Bottom from './Bottom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      `https://api.apixu.com/v1/forecast.json?key=${
        process.env.REACT_APP_API_KEY
      }&q=Buenos+Aires&days=6`,
    )
      .then(response => response.json())
      .then(jsonData => {
        jsonData.current.condition.icon = jsonData.current.condition.icon.replace(
          '64x64',
          '128x128',
        )
        this.setState({
          clima: jsonData,
          isLoaded: true,
        })
      })
  }

  render() {
    const { location, current, forecast } = this.state.clima
    return this.state.isLoaded ? (
      <div className="App">
        <div className="container">
          <Top current={current} location={location}/>
          <Bottom forecast={forecast} />
        </div>
      </div>
    ) : (
      <div className="App">Cargando...</div>
    )
  }
}

export default App