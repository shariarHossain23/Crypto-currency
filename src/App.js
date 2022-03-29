import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coins from './component/coins/Coins';
import Header from './component/Header/Header';
import Home from './component/home/Home';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/coins' element={<Coins></Coins>}/>
      </Routes>
    </div>
  );
}

export default App;
