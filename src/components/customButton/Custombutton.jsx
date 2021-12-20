import React from "react"
import './custombutton.style.scss'
const Custombutton=({children,isgoogleSignIn,...otherprops})=>
{
    return <>

<button className={`${ isgoogleSignIn ? 'google-sign-in ':''} custom-button`} {...otherprops}>
{children}
</button>
    </>

}

export default Custombutton