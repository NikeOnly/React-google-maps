import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import promise from 'redux-promise';

import App from './pages/app/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </Router>
  </Provider>, document.getElementById('container'));
