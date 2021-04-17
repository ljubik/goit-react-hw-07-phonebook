import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persiststore } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Switch, Route, Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import routes from './routes';
ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persiststore} loading={null}> */}
      <Router>
        <React.StrictMode>
        <Suspense fallback="Waiting...">
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Suspense>
          {/* <App /> */}
        </React.StrictMode>
      </Router>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
