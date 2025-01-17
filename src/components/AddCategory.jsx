import { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue("");
        }
        
    }

    return(
        <form onSubmit={handleSubmit} action="">
            <input 
               type="text" 
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)} //esto funciona tambien con una funcion handleAdd por ejemplo
            />
        </form>   
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}