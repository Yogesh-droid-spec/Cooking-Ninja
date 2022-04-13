import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {projectFirestore} from '../../firebase/config'
import { useTheme } from '../../hooks/useTheme';
import './Recipe.css'

function Recipe(){

  const[isLoading,setIsLoading] = useState(false)
  const[data,setData] = useState(null)
  const[error,setError] = useState(false)

  const{mode} = useTheme()

  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true)

    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
     if(doc.exists){
       setIsLoading(false)
       setData(doc.data())
     }
     else{
       setIsLoading(false)
       setError('Could not find that recipe')
     }
    })
  },[id])

  

  
  return <div className={`recipe ${mode}`}>
      {isLoading&&<p className='loading'>Loading...</p>}
      {error&&<p className='error'>{error}</p>}
      {data&&(<>
        <h2 className='page-title'>{data.title}</h2>
        <p>Takes {data.cookingTime} to cook.</p>
        <ul>
          {data.ingredients.map((ing) => {
            return <li key={ing}>{ing}</li>
          })}
        </ul>
        <p className='method'>{data.method}</p>
      </>)}
  </div>
}

export default Recipe;