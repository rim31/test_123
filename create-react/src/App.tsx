import React from "react";
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
// import Jackets from './components/pages/Jackets';
// import Accessories from './components/pages/Accessories';
// import Shirts from './components/pages/Shirts';
import Movies from './components/pages/Movies';
import Details from './components/pages/Details';
import { StoreContainer } from "./components/Store"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <StoreContainer.Provider>
        <div className="App" style={{ backgroundColor: "whitesmoke", height: '100%' }}>

          {/* Layout named NavBar */}
          <NavBar>
            <header className="App-header" style={{ backgroundColor: "#282c34", minHeight: '100vh', color: 'white' }}>
              <div className="container" >

                {/* Routing */}
                <Switch>
                  <Route exact path={'/'} component={Home} />
                  {/* <Route exact path={'/jackets'} component={Jackets} />
                  <Route exact path={'/shirts'} component={Shirts} />
                  <Route exact path={'/accessories'} component={Accessories} /> */}
                  <Route exact path={'/movies'} component={Movies} />
                  <Route exact path={'/details/:id'} component={Details} />
                  <Route path={'*'} ><NotFound /></Route>
                </Switch>
              </div>
            </header>
          </NavBar>
        </div>


      </StoreContainer.Provider>
    </Router >
  );
};

function NotFound() {
  return (
    <h1>Page Not Found</h1>
  )
}

export default App;