import React from "react";
import Semster1 from "./Semster1.jsx";
import Semster2 from "./Semster2.jsx";
import Semster3 from "./Semster3.jsx";
import Semster4 from "./Semster4.jsx";
import Semster5 from "./Semster5.jsx";
import Semster6 from "./Semster6.jsx";
import Home from "./Home.jsx";
import Sallybus from "./Sallybus.jsx";

import { BrowserRouter , Routes , Route} from "react-router-dom";

const App = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sallybus" element={<Sallybus/>}/>
        <Route path="/Semster1" element={<Semster1/>}/>
        <Route path="/Semster2" element={<Semster2/>}/>
        <Route path="/Semster3" element={<Semster3/>}/>
        <Route path="/Semster4" element={<Semster4/>}/>
        <Route path="/Semster5" element={<Semster5/>}/>
        <Route path="/Semster6" element={<Semster6/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
