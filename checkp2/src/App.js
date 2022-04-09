import '../src/index.css';
import GameList from './Components/GameList';
import GameDetails from './Components/GameDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/:id" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
