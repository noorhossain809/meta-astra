import "./App.scss";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Navigration from "./components/Navigration";
import Footer from "./components/Footer";

function App() {
   return (
      <>
         <BrowserRouter>
         <Navigration />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/team" element={<Team />} />
               <Route path="/faq" element={<Faq />} />
               <Route path="coming-soon" element={<ComingSoon />} />
            </Routes>
            <Footer />
         </BrowserRouter>
         
      </>
   );
}

export default App;
