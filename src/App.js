import './App.css';

import {BrowserRouter as Router,
        Route,
        Redirect,
        Switch} from 'react-router-dom';

//importamos pagina de usuarios.
import Users from './users/pages/Users.js';
import MainNavigation 
  from './shared/components/Navigation/MainNavigation/MainNavigation.js';

//importamos pagina de newPlaces
import NewPlaces from './places/pages/NewPlaces.js'; 

function App() {
  return (
    <Router>
      <MainNavigation /> {/* Componente para navegacion principal. */ }
      <main>
        <Switch>
          {/* Gestion de ruta default */}
          <Route path="/" exact>
            <Users />
          </Route>

          {/* ruta hacia formulario de newPlaces */}
          <Route path="/places/new" exact>
            <NewPlaces />
          </Route>

          {/* Redireccionamineto a default para casos desconocidos */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
