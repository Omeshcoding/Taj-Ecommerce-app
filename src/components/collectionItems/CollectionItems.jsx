import React from 'react';
import './collectionItems.scss';

const CollectionItems = ({id, name , imageUrl, price}) => {
    return (
        <div className='collection-item'>
            <div
                key={id}
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            
      </div>
  )
}

export default CollectionItems;