import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Navigation from "./components/Navigation";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path='/' element={<About/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/blogs' element={<Blogs/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
