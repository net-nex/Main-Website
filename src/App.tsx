import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/home-page/homepage';
import Events from './pages/events-page/events';
import Projects from './pages/projects/projects';
import Registeration from "./pages/reg-page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reg" element={<Registeration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
