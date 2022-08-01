import React from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/preview-collection/collectionPreview";

class ShopPage extends React.Component{

    constructor(props) {
        super();

        this.state = {
            collection: SHOP_DATA
        }
    }
    
    render() {
        const {collection} = this.state;
 

        return (
            <div className="shop-page">
                {
                    collection.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview
                            key={id}
                            {...otherCollectionsProps}
                    />    
                    )) 
            }    
            </div>
        )
    }
}

export default ShopPage;