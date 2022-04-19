import ButtonAppBar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Container/About";
import Home from "./Container/Home";
import Browse from "./Container/Browse";
import Explore from "./Container/Explore"
import Dynamic from "./Container/Dynamic.js"


const App = () => {
  return (
    <div>
      <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element = {<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dynamic" element={<Dynamic />} />
         </Routes>
      </Router>
    </div>
  )
}

export default App;
