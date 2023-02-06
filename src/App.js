import './App.css';
import Logo from './componentes/Logo';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='appTareas'>
        <Logo/>
        <div className='tareasListaPrincipal'>
          <h1>Mis tareas</h1>
          <ListaDeTareas/>
        </div>
      </div>
    </div>                                                     
  );
}

export default App;
