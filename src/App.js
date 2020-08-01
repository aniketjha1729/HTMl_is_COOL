/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Welcome from './Components/Base/Welcome';

import IntroToGame from './Components/IntroToGame/IntroToGame';
import IGLevel1 from "./Components/IntroToGame/Levels/IGLevel1"
import IGLevel2 from './Components/IntroToGame/Levels/IGLevel2';
import IGLevel3 from './Components/IntroToGame/Levels/IGLevel3';

import Condition from './Components/Conditions/Condition';
import CLevel1 from './Components/Conditions/Levels/CLevel1'; 
import CLevel2 from './Components/Conditions/Levels/CLevel2'; 
import CLevel3 from './Components/Conditions/Levels/CLevel3'; 
import CLevel4 from './Components/Conditions/Levels/CLevel4'; 
import CLevel5 from './Components/Conditions/Levels/CLevel5'; 
import CLevel6 from './Components/Conditions/Levels/CLevel6'; 
import CLevel7 from './Components/Conditions/Levels/CLevel7'; 
import CLevel8 from './Components/Conditions/Levels/CLevel8'; 
import CLevel9 from './Components/Conditions/Levels/CLevel9'; 
import CLevel10 from './Components/Conditions/Levels/CLevel10'; 
import CLevel11 from './Components/Conditions/Levels/CLevel11'; 
import CLevel12 from './Components/Conditions/Levels/CLevel12'; 
import CLevel13 from './Components/Conditions/Levels/CLevel13'; 
import CLevel14 from './Components/Conditions/Levels/CLevel14'; 
import CLevel15 from './Components/Conditions/Levels/CLevel15'; 
import CLevel16 from './Components/Conditions/Levels/CLevel16'; 
import CLevel17 from './Components/Conditions/Levels/CLevel17'; 
import CLevel18 from './Components/Conditions/Levels/CLevel18'; 
import CLevel19 from './Components/Conditions/Levels/CLevel19'; 


export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={Welcome} />

          
          <Route exact path="/introtogamelevel1" exact component={IGLevel1} />
          <Route exact path="/introtogamelevel2" exact component={IGLevel2} />
          <Route exact path="/introtogamelevel3" exact component={IGLevel3} />

          
          <Route exact path="/conditionlevel1" exact component={CLevel1} />
          <Route exact path="/conditionlevel2" exact component={CLevel2} />
          <Route exact path="/conditionlevel3" exact component={CLevel3} />
          <Route exact path="/conditionlevel4" exact component={CLevel4} />
          <Route exact path="/conditionlevel5" exact component={CLevel5} />
          <Route exact path="/conditionlevel6" exact component={CLevel6} />
          <Route exact path="/conditionlevel7" exact component={CLevel7} />
          <Route exact path="/conditionlevel8" exact component={CLevel8} />
          <Route exact path="/conditionlevel9" exact component={CLevel9} />
          <Route exact path="/conditionlevel10" exact component={CLevel10} />
          <Route exact path="/conditionlevel11" exact component={CLevel11} />
          <Route exact path="/conditionlevel12" exact component={CLevel12} />
          <Route exact path="/conditionlevel13" exact component={CLevel13} />
          <Route exact path="/conditionlevel14" exact component={CLevel14} />
          <Route exact path="/conditionlevel15" exact component={CLevel15} />
          <Route exact path="/conditionlevel16" exact component={CLevel16} />
          <Route exact path="/conditionlevel17" exact component={CLevel17} />
          <Route exact path="/conditionlevel18" exact component={CLevel18} />
          <Route exact path="/conditionlevel19" exact component={CLevel19} />
        </Switch>
      </BrowserRouter>
  )
}
