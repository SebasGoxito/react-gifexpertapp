import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGridn } from './components/GifGridn';

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['One Punch Man']);

   // const handleAdd = () => {
   //    setcategories(['HunterXHunter', ...categories]);
   //    setcategories(cats => [...cats, 'HunterXHunter' ])
   // };

   return (
      <>
         <h1>GifExpertApp</h1>
         <AddCategory setCategories={setCategories} />
         <hr />

         <ol>
            {categories.map((category) => (
               <GifGridn key={category} category={category} />
            ))}
         </ol>
      </>
   );
};
