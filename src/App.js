/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Welcome from './Components/Base/Welcome';
import IntroToGame from './Components/IntroToGame/IntroToGame';
import IGLevel1 from "./Components/IntroToGame/Levels/IGLevel1"
import IGLevel2 from './Components/IntroToGame/Levels/IGLevel2';
import IGLevel3 from './Components/IntroToGame/Levels/IGLevel3';

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={Welcome} />
          <Route exact path="/introtogame" exact component={IntroToGame}/>
          <Route exact path="/introtogamelevel1" exact component={IGLevel1} />
          <Route exact path="/introtogamelevel2" exact component={IGLevel2} />
          <Route exact path="/introtogamelevel3" exact component={IGLevel3} />
        </Switch>
      </BrowserRouter>
  )
}
