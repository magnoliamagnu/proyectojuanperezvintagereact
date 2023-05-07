import React from 'react';
import Title from './Title';


export const itemsListContainer = (props) => {
    
  return (
    <Title greeting= {props.texto}/>
  );
}

export default itemsListContainer;