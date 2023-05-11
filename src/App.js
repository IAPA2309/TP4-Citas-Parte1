import ListaCitas from './components/ListaCitas.js/ListaCitas.js';
import CitaInput from './components/CitaColumn.js/CitaInput.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div class="one-half column">
            <CitaInput title={"Crear mi cita"} />
          </div>
          <div class="one-half column">
            <ListaCitas title={"Administra tus citas"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
