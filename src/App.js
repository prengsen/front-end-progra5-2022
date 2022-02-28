import './App.css';
import {BrowserRouter as Router, 
        Route,
        Redirect,
        Switch} from 'react-router-dom';

import Users from './users/pages/Users.js';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation.js';
import UserPlaces from './users/pages/UserPlaces';

function App() {
  return (
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>


            <Route path="/places/new" exact>
              <NewPlaces />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
      </Router>

  );
}

export default App;
