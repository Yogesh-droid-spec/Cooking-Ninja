import { useLocation } from 'react-router-dom';
import RecipesList from '../../components/RecipesList';
import { useFetch } from '../../hooks/useFetch';
import './Search.css'

function Search() {
     
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    
    const url = 'http://localhost:3000/recipes?q='+query
    const {data:recipes,isPending:isLoading,error} = useFetch(url)

    return <div>
        <h2 className='page-title'>Recipes including "{query}"</h2>
        {error&&<p className='error'>{error}</p>}
        {isLoading&&<p className='loading'>Loading...</p>}
        {recipes&&<RecipesList recipes={recipes} />}
    </div>
}

export default Search;