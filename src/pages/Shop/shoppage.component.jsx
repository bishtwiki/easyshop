
import React,{Component} from "react";
import Shopdata from "../../Constants/shopdata";
import CollectionPreview from "../../components/Collectionpreview/Collectionpreview.component";

class ShopPage extends Component {
    
    constructor()
    {
         super()
        this.state={collections:Shopdata}
    }

    render()
    {
        const {collections}=this.state;

        return (<>
        <div className="shop-page">
        { collections.map(({id,...othershopdata})=>
        (<CollectionPreview key={id} {...othershopdata}/>
        ))}
        
        </div>
        </>)
    }
}

export default ShopPage