import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact"
import Proyects from "./Components/Proyects/Proyects"
import Abaut from "./Components/Abaut/Abaut"
import Navbar from "./Components/Navbar/Navbar"
import "./App.scss"
function App() {


  return (
    <div className="AppWindow">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/proyects" element={<Proyects/>} />
      <Route path="/abaut" element={<Abaut />} />
      </Routes>
    </div>
  )
}

export default App
