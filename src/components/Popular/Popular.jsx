import React from 'react';
import './Popular.css';
import data_product from '../../assets/data';
import Item from '../item/Item';

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-items">
        {data_product.map((item, index) => {
          return (
            <Item 
              key={index} 
              title={item.Name} 
              image={item.image} 
              price={item.price} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
