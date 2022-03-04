
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Accueil from './Accueil';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Accueil />} />
      </Routes>
    </Router>
  );
}
export default App;
