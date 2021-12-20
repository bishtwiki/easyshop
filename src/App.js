
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/homepage.component";
import ShopPage from "./pages/Shop/shoppage.component";
import Header from "./components/Header/Header.component";
import LoginForm from "./pages/LoginForm/LoginForm.component";
function App() {
  return (
    <>
   <Router>
    <Header/>
    <Switch> 
    <Route  exact path='/' component={Homepage} />
    <Route path='/shop' component ={ShopPage} />
    <Route path='/signin' component={LoginForm}/>
    </Switch>
    </Router>
    </>
 );
}

export default App;
