import React, {Component} from 'react'
import Card from './Card'

const Bottom = (props) =>{
    
    const {forecast} = props

    return(
        <div className='bottom'>
            {forecast.forecastday.map(dia => {
                return <Card dia={dia} key={dia.date}/>
            })}
        </div>
    )
}

export default Bottom