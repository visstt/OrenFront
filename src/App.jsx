import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Catalog from "./Pages/Catalog/catalogPage";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
=======
      <Catalog />
      {/* <HomePage /> */}
    </>
>>>>>>> 93583dd4c82d4b4e3c37c85783689a8294365305
  );
}

export default App;
