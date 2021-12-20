
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/homepage.component";
import ShopPage from "./pages/Shop/shoppage.component";
import Header from "./components/Header/Header.component";
function App() {
  return (
    <>
   <Router>
    <Header/>
    <Switch> 
    <Route  exact path='/' component={Homepage} />
    <Route   path='/shop' component ={ShopPage} />
    </Switch>
    </Router>
    </>
 );
}

export default App;
