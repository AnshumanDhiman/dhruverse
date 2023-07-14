import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
// import WebDevelopment from "./pages/WebDevelopment";
// import Automation from "./pages/Automation";
// import UiUx from "./pages/UiUx";
// import Content from "./pages/Content";
// import Quality from "./pages/Quality";

function App() {
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