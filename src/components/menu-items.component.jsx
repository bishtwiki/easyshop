import React from 'react'
import './menu-items.style.scss'

const Menu_Item =({title,image})=>{
    return (
        <>
        <div className="menu-item">
            <div  className='background-image' style={{backgroundImage:`url(${image})`}}/>
                
          <div className="content">
                <h3 style={{wordWrap:`break-word`}} className="title"> {title.toUpperCase()} </h3>
                    <span className="subtitle"> SHOP NOW </span>
            </div>
            </div>
            
        </>
    )

}
export default Menu_Item