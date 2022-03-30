import { Route, Routes } from "react-router-dom";
import "./App.css";
import Carddetail from "./component/carddetail/Carddetail";
import Coins from "./component/coins/Coins";
import BdAdreess from "./component/Contact/bdadress/BdAdreess";
import Contact from "./component/Contact/Contact";
import UsAdress from "./component/Contact/usaddress/UsAdress";
import Header from "./component/Header/Header";
import Home from "./component/home/Home";
import Notfound from "./component/notfound/Notfound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/coins" element={<Coins></Coins>} />
        <Route
          path="/coin-details/:coinId"
          element={<Carddetail></Carddetail>}
        />
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="bd-address" element={<BdAdreess></BdAdreess>}></Route>
          <Route path="us-address" element={<UsAdress></UsAdress>}></Route>
        </Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
