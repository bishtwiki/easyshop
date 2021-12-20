
import CollectionItem from "../CollectionItem/CollectionItem.component"
import './Collection.Preview.style.scss'
const CollectionPreview =({title,items})=>{

    return (
        <>
        <div className="collection-preview">

        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
        {items.filter((item,idx)=>idx< 4).map(({id,...otherprops})=> (<CollectionItem key={id} {...otherprops} />))}
         </div>
        </div>
        
        </>
    )

}

export default CollectionPreview