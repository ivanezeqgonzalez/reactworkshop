import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Top from './Top'

const semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
"Domingo"]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: {},
      isLoaded: false
    };
    //No hay que olvidarse del binding
    this.getWeekDay = this.getWeekDay.bind(this);
  }

  getWeekDay(fecha) {
    return semana[new Date(fecha * 1000).getDay()];
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
          <div className="bottom">
            {forecast.forecastday.map(dia => {
              return (
                <div className="card" key={dia.date}>
                  <h5>{this.getWeekDay(dia.date_epoch)}</h5>
                  <h6>{dia.date}</h6>
                  <img
                    src={dia.day.condition.icon}
                    alt="Clima diario"
                    className="imagebottom"
                  />
                  <div className="minmax">
                    <p>
                      <span className="tempmax" />
                      {parseInt(dia.day.maxtemp_c)}
                    </p>
                    <p>
                      <span className="tempmin" />
                      {parseInt(dia.day.mintemp_c)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    ) : (
      <div className="App">Cargando...</div>
    )
  }
}

export default App