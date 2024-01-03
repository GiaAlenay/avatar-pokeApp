
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PokemonProvider from './Context/PokemonProvider';
import { PokemonDetail } from './Pages/PokemonDetail/PokemonDetail';
import Error from './Pages/Error/Error';
function App() {
  return (
    <PokemonProvider>
    <Router>
      <Routes>
        {/* <Route path="/pokemons/?offset=:offset&limit=:limit" element={<Home/>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
    </PokemonProvider>
  );
}

export default App;
