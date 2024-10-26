import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Catalog from "./Pages/Catalog/catalogPage";
import HomePage from "./Pages/Home/HomePage";
import TourPage from "./Pages/Tour/TourPage";
import CreatePage from "./Pages/Create/CreatePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
