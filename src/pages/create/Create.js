import { useEffect, useRef, useState } from 'react';
import {projectFirestore} from '../../firebase/config'
import { useHistory } from 'react-router-dom';

import { useTheme } from '../../hooks/useTheme';
import './Create.css'

function Create() {
    const[title,setTitle] = useState('')
    const[method,setMethod] = useState('')
    const[cookingTime,setCookingTime] = useState('')
    const[newIngredient,setNewIngredient] = useState('')
    const[ingredients,setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const history = useHistory()

    const {mode} = useTheme()

    

    const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(title,ingredients,method);
     const doc = {title,ingredients,method,cookingTime:cookingTime+' minutes'}

     try{
        await projectFirestore.collection('recipes').add(doc)
        history.push('/')
     }
     catch(err){
       console.log(err);
     }
    }

    const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing&&!ingredients.includes(ing)){
     setIngredients(prevIngs => [...prevIngs, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
    }

  

    return <div className={`create ${mode}`}>
        <h2 className='page-title'>Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Recipe Title:</span>
                <input 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  required  
                />
            </label>

            <label>
                <span>Recipe Ingredients:</span>
                <div className='ingredients'>
                  <input type='text'
                  value={newIngredient}
                  ref={ingredientInput}
                  onChange={(e) => setNewIngredient(e.target.value)} />
                  <button onClick={handleAdd} className='btn'>add</button>
                </div>
            </label>
            <p>Current Ingredients: {ingredients.map((i) => <em key={i}>{i},</em>)}</p>

            <label>
                <span>Recipe Method:</span>
                <textarea
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    required
                />
            </label>

            <label>
                <span>Cooking Time(minutes):</span>
                <input 
                    type='number'
                    value={cookingTime}
                    onChange={(e) => setCookingTime(e.target.value)}
                    required
                />
            </label>

            <button className='btn'>submit</button>
        </form>
    </div>
}

export default Create;