import { useEffect, useState } from 'react';
import RecipesList from '../../components/RecipesList';
import {projectFirestore} from '../../firebase/config'
import './Home.css'

function Home() {

    const[isLoading,setIsLoading] = useState(false)
    const[data,setData] = useState(null)
    const[error,setError] = useState(false)

    useEffect(() => {
      setIsLoading(true)

      const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
       if(snapshot.empty){
           setError('No recipes found!')
           setIsLoading(false)
       }
       else{
           const results = []
           snapshot.docs.forEach(doc => {
               results.push({id:doc.id,...doc.data()})
           })
           setData(results)
           setIsLoading(false)
       }
      },(err) => {
        setError(err.message)
        setIsLoading(false)
      })

      return () => unsub()

    },[])

    return <div className='home'>
         {isLoading&&<p className='loading'>Loading...</p>}
         {error&&<p className='error'>{error}</p>}
         {data&&<RecipesList recipes={data} />}
    </div>
}

export default Home;