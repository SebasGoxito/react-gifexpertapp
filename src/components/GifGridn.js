import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFechGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGridn = ({ category }) => {
  

   const {data:imagenes,loading} = useFechGifs(category);
  

   return (
      <>
         <h3>{category}</h3>
        {loading && <p>Loading</p>}
         {<div className="card-grid">
            {imagenes.map((img) => (
               <GifGridItem key={img.id} {...img} />
            ))}
         </div>}
      </> 
   );
};
