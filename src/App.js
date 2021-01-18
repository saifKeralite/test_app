import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";

import store from './redux/store/index';
import { Provider } from 'react-redux';

import './Sass/index.scss'
import Home from './Views/containers/Home/Home';
import DetailsPage from './Views/containers/DetailsPage/DetailsPage';
import Header from './Views/components/Header/Header';
import { search_news } from './redux/actions';
function App() {

  return (
    <div className="App">
      {/* Store data stars from here as props */}
      <Provider store={store}>
        {/* Adding router here  */}
        <Header />
        <Router basename="/test_app/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={DetailsPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
