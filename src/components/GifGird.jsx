//import { useState, useEffect } from "react";
import { GifGirdItem } from "./GifGirdItem";

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGird = ({category}) => {


   const {data: images, loading} = useFetchGifs(category)

    return(
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {loading && <p className="animate__animated animate__flash">loading</p>}

        <div className = "card-gird"> 
            <ol>
                {
                    images.map(img => (
                        <GifGirdItem 
                        key = {img.id}
                        {...img}
                        />
                    ))
                }
            </ol>
        </div> 
        </>
        
    )
}