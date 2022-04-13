
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import './NavBar.css'
import SearchBar from './SearchBar';

function NavBar() {
      const{color}  = useTheme()

    return <div className='navbar' style={{background:color}}>
       <nav >
        <Link to='/' className='brand'>
            <h1>Cooking Ninjas</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>
          Create Recipe
        </Link>
       </nav>
    </div>
}

export default NavBar;