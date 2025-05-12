import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./pages/Cover";
import Invitation from "./pages/Invitation";
import Admin from "./components/Adminn/Admin";
import Not from "./pages/Error-page";
import Musik from "./components/common/MusikButton"; // Komponen untuk kontrol musik
import { MusicProvider } from "./components/music/music"; // Import MusicProvider

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/undangan/:name" element={<Cover />} />
        <Route path="/error" element={<Not />} />
        <Route path="*" element={<Not />} />
        <Route path="/undangan/:name/ourWedding" element={<Invitation />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </Router>
  );
}

export default App;
