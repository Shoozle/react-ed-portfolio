import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs'
import { Route, Routes, useLocation } from 'react-router-dom';
import GameDetail from "./pages/GameDetail";

//Needed for anim exits
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {

  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ScrollTop/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<GameDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
