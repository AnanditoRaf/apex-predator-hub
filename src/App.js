import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import { MdGroup } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
 
import "./App.css";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Legends from "./pages/Legends";
import LegendDetail from "./pages/LegendDetail";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (    
    <BrowserRouter>
      <header>
        <p id="titleGroup">Apex-Predator-Hub</p>
      </header>
      <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/legends" element={<Legends />}></Route>
        <Route path="/LegendDetail/:id" element={<LegendDetail />}></Route>
        <Route path="/NewsDetail/:id" element={<NewsDetail />}></Route>

      </Routes>
      <footer>
        <NavLink to="/News" className="iconWrapper">
          <BiNews className="icon" />
          News
        </NavLink>
        <NavLink to="/legends" className="iconWrapper">
          <MdGroup className="icon" />
          Legends
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <HiUser className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}
 
export default App;