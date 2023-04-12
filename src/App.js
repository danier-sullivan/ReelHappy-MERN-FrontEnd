import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import NavBar from './components/NavBar'
import Movies from './pages/Movies'
import TopTen from './components/TopTen'
import ViewMovie from './components/ViewMovie'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          {/* path = url, element = what page for that url */}
          <Route path='/' element={<Home />} />
          <Route path='/Browse' element={<Movies />} />
          <Route path='/:title' element={<ViewMovie />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Is there a way to avoid wrapping in browser router?  