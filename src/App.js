import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Navbar from './Compenent/navbar/Navbar';
import Bian from "./Compenent/navbar/Bian";

function App() {
  return (
    <div className="App">
      <Bian />
      <Navbar />
    </div>
  );
}

export default App;
