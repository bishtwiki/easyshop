
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/homepage.component";
import ShopPage from "./pages/Shop/shoppage.component";
import Header from "./components/Header/Header.component";
import LoginForm from "./pages/LoginForm/LoginForm.component";
import {auth} from '../src/firebase/firebase.util'
class App extends React.Component {

  constructor()
  {
    super()
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null

  componentDidMount()
  {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
     
})
   
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth()
  }

 
  render()
  {
    
    
    return (
      <>
     <Router>
      <Header currentUser={this.state.currentUser}/>
      <Switch> 
      <Route  exact path='/' component={Homepage} />
      <Route path='/shop' component ={ShopPage} />
      <Route path='/signin' component={LoginForm}/>
      </Switch>
      </Router>
      </>
   );
  }

}

export default App;
