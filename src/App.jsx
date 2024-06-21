import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import Menu from "./components/Menu";
import FoodNavbar from "./components/FoodNavbar";


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/:foodUniqueId" element={<Home><Menu/></Home>}></Route>
    </Routes>
    </>
  )
}
export default App;