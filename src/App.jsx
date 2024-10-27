import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Catalog from "./Pages/Catalog/catalogPage";
import HomePage from "./Pages/Home/HomePage";
import TourPage from "./Pages/Tour/TourPage";
import CreatePage from "./Pages/Create/CreatePage";
import Admin from "./Pages/Admin/Admin";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/tours/:id" element={<TourPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
