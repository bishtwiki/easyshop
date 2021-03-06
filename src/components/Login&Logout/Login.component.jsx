
import React from "react";
import FormInput from "./formInput.component";
import Custombutton from "../customButton/Custombutton";
import './Login.style.scss'
import {signInWithGoogle} from '../../firebase/firebase.util'
class Login extends React.Component{
    constructor()
    {
        super();
        this.state={email:'',password:''}
    }

   handleSubmit=(event)=>{
        event.preventDefault();

    }

    handlerchange=(event)=>{

        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render()
    {
       
        return (
        <>
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput 
        handlerchange={this.handlerchange}
        name="email"
        value={this.state.email} 
        type="email"
        label="email"
        required 
        />  
        
         <FormInput 
        handlerchange={this.handlerchange}
        name="password"
        value={this.state.password} 
        type="password"
        label="Password"
        required 
        /> 
       
       <div className="buttons">
        <Custombutton type="submit">Login</Custombutton>
        <Custombutton onClick={signInWithGoogle } isgoogleSignIn>Sign In with google</Custombutton>
        
       </div>
        
         </form>
        </div>
        </>)
    }
}

export default Login