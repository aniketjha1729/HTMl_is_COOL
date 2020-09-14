/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Welcome from './Components/Welcome';
import PLevel1 from './Components/Jsondata/print/Levels/PLevel1';
import CLevel1 from './Components/Jsondata/conditions/Levels/CLevel1';

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" exact component={Welcome} />
          <Route exact path="/print" exact component={PLevel1} />
         <Route exact path="/conditions" exact component={CLevel1} />
        </Switch>
      </BrowserRouter>
  )
}
