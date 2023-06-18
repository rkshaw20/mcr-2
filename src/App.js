import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import HabitDetails from './pages/HabitDetails';
import Archive from './pages/Archive';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/habitDetails' element={<HabitDetails/>}/>
      <Route path='/archive' element={<Archive/>}/>
      </Routes>
    </div>
  );
}

export default App;
