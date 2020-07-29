import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Welcome from './Components/Base/Welcome';
import IntroToGame from './Components/IntroToGame/IntroToGame';
import Level1 from "./Components/IntroToGame/Levels/Level1"
import Level2 from './Components/IntroToGame/Levels/Level2';







export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={Welcome} />
          <Route exact path="/introtogame" exact component={IntroToGame}/>
          <Route exact path="/introtogamelevel1" exact component={Level1} />
          <Route exact path="/introtogamelevel2" exact component={Level2} />
        </Switch>
      </BrowserRouter>
  )
}
