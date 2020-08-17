/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'


import PLevel1 from './Components/Jsondata/print/Levels/PLevel1';
import PLevel2 from './Components/Jsondata/print/Levels/PLevel2';
import PLevel3 from './Components/Jsondata/print/Levels/PLevel3';
import PLevel4 from './Components/Jsondata/print/Levels/PLevel4';
import PLevel5 from './Components/Jsondata/print/Levels/PLevel5';
import PLevel6 from './Components/Jsondata/print/Levels/PLevel6';
import PLevel7 from './Components/Jsondata/print/Levels/PLevel7';




export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          
          
          <Route exact path="/print/level1" exact component={PLevel1} />
          <Route exact path="/print/level2" exact component={PLevel2} />
          <Route exact path="/print/level3" exact component={PLevel3} />
          <Route exact path="/print/level4" exact component={PLevel4} />
          <Route exact path="/print/level5" exact component={PLevel5} />
          <Route exact path="/print/level6" exact component={PLevel6} />
          <Route exact path="/print/level7" exact component={PLevel7} />
        </Switch>
      </BrowserRouter>
  )
}
