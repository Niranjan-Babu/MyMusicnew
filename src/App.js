import logo from './logo.svg';
import './App.css';
import A from "./A"
import New from "../src/Container/New" 
import Home from "../src/Container/home/Home"
import Anirudh from "../src/Container/artist/Anirudh"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path="/search/yuvan" element={<New/>}/>
          <Route path="/search/anirudh" element={<Anirudh/>}/>
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
