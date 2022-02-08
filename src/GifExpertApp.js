import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';



//functional components
const GifExpertApp = ()=>{
    const [categories,setCategories]=useState(['one punch']);
    // const handleAdd =() =>{
    //     setcategories([...categories,'four']);
    //     setcategories( cats => [...cats,'four']);
    // }
    return (
         <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories}/>
         <hr />
         {/* <button onClick={handleAdd} >Agregar</button> */}
         <ol>
             {
                 categories.map(category => (<GifGrid key={category} category={category}/>))
             }
         </ol>
         </>);

}

export default GifExpertApp;