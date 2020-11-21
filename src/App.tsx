import React from "react";
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Jackets from './components/pages/Jackets';
import Accessories from './components/pages/Accessories';
import Shirts from './components/pages/Shirts';
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

                {/* Routing - Includes routes dev & prod (test_123) */}
                <Switch>
                  <Route exact path={'/test_123/'} component={Home} />
                  <Route exact path={'/'} component={Home} />
                  <Route exact path={'/test_123/jackets'} component={Jackets} />
                  <Route exact path={'/jackets'} component={Jackets} />
                  <Route exact path={'/test_123/shirts'} component={Shirts} />
                  <Route exact path={'/shirts'} component={Shirts} />
                  <Route exact path={'/test_123/accessories'} component={Accessories} />
                  <Route exact path={'/accessories'} component={Accessories} />
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