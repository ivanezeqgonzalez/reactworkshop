import React, { Component } from 'react';
// El archivo css no es necesario cargarlo ya que se carga en el componente padre

// Indicamos que la función recibe props
const Top = (props) => {
  // Usamos ES6 destructuring
  const { current, location } = props;
  return(
    <div className="top">
      <img src={current.condition.icon} alt="Clima principal" className="image" />
      <p className="temp">{current.temp_c} °C</p>
      <h4 className="city">
        {location.name}, {location.region}, {location.country}
      </h4>
      <div className="feelslike">
        ST: {current.feelslike_c} °C, H: {current.humidity} %
      </div>
    </div>
  );
};

export default Top;