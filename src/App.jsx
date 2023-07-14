import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
function App() {
  useSmoothScroll();
  return (
    <>  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;