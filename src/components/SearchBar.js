import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.css'

function SearchBar() {
    const [term,setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
     e.preventDefault()
     
     history.push(`/search?q=${term}`)
     setTerm('')
    }

    return <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input 
          id='search'
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
}

export default SearchBar;