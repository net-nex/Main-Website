import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from './pages/events-page/events';
import Homepage from './pages/home-page/homepage';
import Induction from "./pages/ind-page";
import Projects from './pages/projects/projects';
import Registeration from "./pages/reg-page";

function RecruitmentsRedirect() {
  useEffect(() => {
    window.location.href = "https://forms.gle/gjn8S8VvPx7QvCK36";
  }, []);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reg" element={<Registeration />} />
          <Route path="/induction" element={<Induction />} />
          <Route path="/recruitments" element={<RecruitmentsRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
