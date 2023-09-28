import './App.css';
import Navbar from './components/Navbar';
import Typed from 'react-typed'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <h2>Abin Varghese</h2>
    <Typed strings={['Developer.','Designer.','Human Being.']}typeSpeed={100} backSpeed={50} loop ></Typed>
    </div>
  );
}

export default App;
