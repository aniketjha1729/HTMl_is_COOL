/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Welcome from './Components/Welcome';
import PLevel1 from './Components/Jsondata/print/Levels/PLevel1';
import PLevel2 from './Components/Jsondata/print/Levels/PLevel2';
import PLevel3 from './Components/Jsondata/print/Levels/PLevel3';
import PLevel4 from './Components/Jsondata/print/Levels/PLevel4';
import PLevel5 from './Components/Jsondata/print/Levels/PLevel5';
import PLevel6 from './Components/Jsondata/print/Levels/PLevel6';
import PLevel7 from './Components/Jsondata/print/Levels/PLevel7';


import CLevel1 from './Components/Jsondata/conditions/Levels/CLevel1';
import CLevel2 from './Components/Jsondata/conditions/Levels/CLevel2';
import CLevel3 from './Components/Jsondata/conditions/Levels/CLevel3';
import CLevel4 from './Components/Jsondata/conditions/Levels/CLevel4';
import CLevel5 from './Components/Jsondata/conditions/Levels/CLevel5';
import CLevel6 from './Components/Jsondata/conditions/Levels/CLevel6';
import CLevel7 from './Components/Jsondata/conditions/Levels/CLevel7';
import CLevel8 from './Components/Jsondata/conditions/Levels/CLevel8';
import CLevel9 from './Components/Jsondata/conditions/Levels/CLevel9';
import CLevel10 from './Components/Jsondata/conditions/Levels/CLevel10';
import CLevel11 from './Components/Jsondata/conditions/Levels/CLevel11';
import CLevel12 from './Components/Jsondata/conditions/Levels/CLevel12';
import CLevel13 from './Components/Jsondata/conditions/Levels/CLevel13';
import CLevel14 from './Components/Jsondata/conditions/Levels/CLevel14';


export default function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" exact component={Welcome} />
          <Route exact path="/print/plevel1" exact component={PLevel1} />
          <Route exact path="/print/plevel2" exact component={PLevel2} />
          <Route exact path="/print/plevel3" exact component={PLevel3} />
          <Route exact path="/print/plevel4" exact component={PLevel4} />
          <Route exact path="/print/plevel5" exact component={PLevel5} />
          <Route exact path="/print/plevel6" exact component={PLevel6} />
          <Route exact path="/print/plevel7" exact component={PLevel7} />

        <Route exact path="/condtions/clevel1" exact component={CLevel1} />
        <Route exact path="/condtions/clevel2" exact component={CLevel2} />
        <Route exact path="/condtions/clevel3" exact component={CLevel3} />
        <Route exact path="/condtions/clevel4" exact component={CLevel4} />
        <Route exact path="/condtions/clevel5" exact component={CLevel5} />
        <Route exact path="/condtions/clevel6" exact component={CLevel6} />
        <Route exact path="/condtions/clevel7" exact component={CLevel7} />
        <Route exact path="/condtions/clevel8" exact component={CLevel8} />
        <Route exact path="/condtions/clevel9" exact component={CLevel9} />
        <Route exact path="/condtions/clevel10" exact component={CLevel10} />
        <Route exact path="/condtions/clevel11" exact component={CLevel11} />
        <Route exact path="/condtions/clevel12" exact component={CLevel12} />
        <Route exact path="/condtions/clevel13" exact component={CLevel13} />
        <Route exact path="/condtions/clevel14" exact component={CLevel14} />
        </Switch>
      </BrowserRouter>
  )
}
