import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyTackle from "./pages/MyTackle";
import FishGuide from "./pages/FishGuide";
import LakeGuide from "./pages/LakeGuide";
import CatchLog from "./pages/CatchLog";
import ShoppingList from "./pages/ShoppingList";
import Settings from "./pages/Settings";

import SoftPlastics from "./pages/SoftPlastics";
import JigHeads from "./pages/JigHeads";

import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";

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

        <Route path="/jigheads" element={<JigHeads />} />

        <Route path="/additem/:category" element={<AddItem />} />

        <Route path="/edititem/:id" element={<EditItem />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;