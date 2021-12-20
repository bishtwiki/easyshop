import React from "react";
import MenuItem from "./menu-items.component"
import './directory.style.scss'

class Directory extends React.Component {

constructor()
{
    super();
    this.state={content:[]}
}

componentDidMount()
{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>this.setState({content:json}))
}

render()
{
    return (
    <>
    <div className="directory-menu">
    {this.state.content.map(({id,title,image})=><MenuItem key ={id} title={title} image={image}  size="large"/>)}
    </div>
    
    </>)
}

}

export default Directory