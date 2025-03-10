import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import App from 'components/App';
import * as reducers from 'reducers';
import './stylesheet.scss';

const store = createStore(combineReducers({ ...reducers, routing: routerReducer }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/scratch-paper/:gistId" component={App}/>
        <Route exact path="/:categoryKey/:algorithmKey" component={App}/>
        <Route path="/">
          <Redirect to="/dynamic-programming/bellman-fords-shortest-path" />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
