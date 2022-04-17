import ButtonAppBar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Container/About";
import Home from "./Container/Home";
import Browse from "./Container/Browse";
const App = () => {
  return (
    <div>
      <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element = {<Browse />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
