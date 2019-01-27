import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Top from './components/Top'
import Bottom from './components/Bottom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://wt-d533d1099172471b9b435b86f4497980-0.sandbox.auth0-extend.com/clima-apixu')
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