import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div class="cita">
      <p>Mascota: <span>{props.pet}</span></p>
      <p>Dueño: <span>{props.owner}</span></p>
      <p>Fecha: <span>{props.date}</span></p>
      <p>Hora: <span>{props.time}</span></p>
      <p>Sintomas: <span>{props.symptoms}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
  )
}

export default Card