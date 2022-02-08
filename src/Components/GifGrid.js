import React, { useState,useEffect } from 'react'
import GifGridItem from './GifGridItem';
import {getGifs} from '../helpers/getGifs'
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid =  ({category}) => {
    // const [images,setImages]= useState([]);
    // useEffect(()=>{
    //     // que se ejecute cuando se llame al codigo por primera vez
    //     getGifs(category)
    //     .then(setImages);
    // },[category])
    const {data:images,loading} = useFetchGifs(category);
    
  return (<>
    <h3 className='animate__animated animate__bounce animate__fadeIn'>{category}</h3>
    {loading && <p>Loading ...</p>}
    <div className='card-grid animate__animated animate__bounce animate__flash'>
              {images.map((img)=>{
                  return <GifGridItem key={img.id} {...img} />
              })}
    </div>
    </>
  )
}

export default GifGrid
