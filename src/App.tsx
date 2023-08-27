import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/home-page/homepage';
import Events from './pages/events-page/events';
import Projects from './pages/projects/projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
