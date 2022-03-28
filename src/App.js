import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import Tourism from "./Components/Pages/Tourism";
import Tour from "./Components/Pages/Tour";
import SignUp from "./Components/Pages/SignUp";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
