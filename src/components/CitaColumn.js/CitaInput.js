import React from 'react';
import './CitaInput.css';

function CitaInput(props) {
  return (
    <>
        <h2>{props.title}</h2>
        <form>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" defaultValue="" />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" defaultValue="" />
            <label>Fecha</label>
            <input type="date" name="fecha" class="u-full-width" defaultValue="" />
            <label>hora</label>
            <input type="time" name="hora" class="u-full-width" defaultValue="" />
            <label>Sintomas</label>
            <textarea name="sintomas" class="u-full-width"></textarea>
            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
    </>
  )
}

export default CitaInput