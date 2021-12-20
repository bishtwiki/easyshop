
import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/Shop/shoppage.component";
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route  path='/' element ={<Homepage/>} />
    <Route  path='/shop' element ={<ShopPage/>} />
    </Routes>
    </Router>
    </>
 );
}

export default App;
