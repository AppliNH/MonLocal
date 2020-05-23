import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from './screens/NotFound';
import Main from './screens/Main';

const Root = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        {/* <Route path="/username/:username" component={App}></Route> */}
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  )

export default Root