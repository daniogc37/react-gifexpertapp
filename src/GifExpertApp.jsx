import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGird } from "./components/GifGird"
export const GifExpertApp = () => {

  

    const [categories,setCategories] = useState(['One punch'])

    // const handleAdd = () =>{
    //     //setCategories(['Naruto', ...categories])
    //     setCategories(cats => ['Naruto',...cats])
    // }


    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category =>(
                        <GifGird
                        key = {category} 
                        category = {category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}