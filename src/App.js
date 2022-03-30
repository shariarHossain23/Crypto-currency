import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carddetail from './component/carddetail/Carddetail';
import Coins from './component/coins/Coins';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Home from './component/home/Home';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/coins' element={<Coins></Coins>}/>
        <Route path='/coin-details/:coinId' element={<Carddetail></Carddetail>}/>
        <Route path='/contact' element={<Contact>
        </Contact>}/>
      </Routes>
    </div>
  );
}

export default App;
