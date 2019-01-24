import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // Agregamos el constructor y definimos el estado
  constructor(props){
    super(props);
    this.state = {
      clima: {},
      load: false
    };
  }
  // Definimos el método componentDidMount con el fetch
  componentDidMount() {
    fetch(
      `https://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=Buenos+Aires&days=6`
    )
    .then(response => response.json())
    .then(jsonData => {
        //Manipulamos el string con la imagen para que sea de 128x128 y quede mejor
        jsonData.current.condition.icon = jsonData.current.condition.icon.replace(
        "64x64",
        "128x128"
      );
      this.setState({
         clima: jsonData,
          load: true 
        })
    })
  }
  
  render() {
    const { location, current, forecast } = this.state.clima;
    return !this.state.load ? (<div>Wait</div>) :(
      <div className="App">
        <div className="container">
          <div className="top">
            <img src={current.condition.icon} alt="Clima principal" className="image" />
            <p className="temp">25 °C</p>
            <h2 className="city">{location.name}</h2>
            <div className="feelslike">ST: 25.4 °C, H: 81 %</div>
          </div>
          <div className="bottom">
            <div className="card">
              <h5>Lunes</h5>
              <h6>2018-09-26</h6>
              <img src={current.condition.icon} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Martes</h5>
              <h6>2018-09-27</h6>
              <img src={current.condition.icon} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Miércoles</h5>
              <h6>2018-09-28</h6>
              <img src={current.condition.icon} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Jueves</h5>
              <h6>2018-09-29</h6>
              <img src={current.condition.icon} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Viernes</h5>
              <h6>2018-09-30</h6>
              <img src={current.condition.icon} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Sábado</h5>
              <h6>2018-10-01</h6>
              <img src={current.condition.icon} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
