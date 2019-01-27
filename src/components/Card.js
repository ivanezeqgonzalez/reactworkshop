import React, {Component} from 'react'

const semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
"Domingo"]

const getWeekDay = (fecha) => {
    return semana[new Date(fecha * 1000).getDay()];
}

const Card = (props) =>{
    const {dia} = props
    return (
        <div className="card" key={dia.date}>
            <h5>{getWeekDay(dia.date_epoch)}</h5>
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
}

export default Card