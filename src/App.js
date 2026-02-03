import './App.css';
import Header from './components/Header';
import WorldCupInfo from './components/WorldCupInfo';
import Equipos from './components/Equipos';

function App() {
  return (
    <div className="App">
      <Header />
      <WorldCupInfo />
      <Equipos />
    </div>   
  );
}

export default App;
