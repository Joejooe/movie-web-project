import './css/App.css'
import Favorites from './pages/Favorites.jsx';
import Home from "./pages/Home.jsx"
import { Routes, Route } from "react-router-dom"; 
import NavBar from './components/NavBar.jsx'; 
import { MovieProvider } from './context/MovieContext.jsx';

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App
