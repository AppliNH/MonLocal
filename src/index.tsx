import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from './screens/NotFound';
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from './theme';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      {/* <Route path="/username/:username" component={App}></Route> */}
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
