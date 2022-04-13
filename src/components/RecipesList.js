import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import TrashCan from '../assets/trash-can.svg'
import {projectFirestore} from '../firebase/config'

import './RecipesList.css'

function RecipesList({recipes}) {

  const handleClick = (id) => {
   projectFirestore.collection('recipes').doc(id).delete()
  
  }

  
  const{mode} = useTheme()
   
  if(recipes.length===0){
    return <div className="error">No recipes to load...</div>
  }


    return <div className="recipe-list">
      {recipes.map((recipe) => {
          return <div className={`card ${mode}`} key={recipe.id}>
             <h3>{recipe.title}</h3>
             <p>{recipe.cookingTime} to make.</p>
             <div>{recipe.method.substring(0,100)}... </div>
             <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
             <img
             src={TrashCan} 
               className='delete'
               onClick={() => handleClick(recipe.id)}
               alt='delete-icon'
             />
          </div>
      })}
    </div>
}

export default RecipesList;