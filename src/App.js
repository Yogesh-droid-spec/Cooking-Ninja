import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css'

import Home from '../src/pages/home/Home'
import Create from '../src/pages/create/Create'
import Recipe from '../src/pages/recipe/Recipe'
import Search from '../src/pages/search/Search'
import NavBar from './components/NavBar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {

  const{mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
    
      <BrowserRouter>
      <NavBar />
      <ThemeSelector />
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/create'>
        <Create />
        </Route>

        <Route path='/recipes/:id'>
        <Recipe />
        </Route>

        <Route path='/search'>
          <Search />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
