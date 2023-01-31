import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navs from "./Component/Navbar/Navbar"
import DetailProject from "./Pages/DetailProject"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <Navs />
      <div
        style={{
          paddingLeft: "250px",
          backgroundColor: "#f9f9ff",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail-Project/:id" element={<DetailProject />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
