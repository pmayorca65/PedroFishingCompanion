import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyTackle from "./pages/MyTackle";
import FishGuide from "./pages/FishGuide";
import LakeGuide from "./pages/LakeGuide";
import CatchLog from "./pages/CatchLog";
import ShoppingList from "./pages/ShoppingList";
import Settings from "./pages/Settings";
import SoftPlastics from "./pages/SoftPlastics";
import AddItem from "./pages/AddItem";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tackle" element={<MyTackle />} />
        <Route path="/fish" element={<FishGuide />} />
        <Route path="/lakes" element={<LakeGuide />} />
        <Route path="/log" element={<CatchLog />} />
        <Route path="/shopping" element={<ShoppingList />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/softplastics" element={<SoftPlastics />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;