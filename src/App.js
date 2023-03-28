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
       <h3>Hello world</h3>
        <Routes>
          <Route exact path='/' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/blogs' component={Blogs}/>
        </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
