import React from 'react'
import { Switch, Route } from 'react-router-dom' 
// import style
import './assets/App.scss'
// import components
import Intro from './components/sections/introSection/intro'
import About from './components/sections/aboutSection/about'
import Tab from './components/tabs'

function App() {
  return(
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/main" component={Tab} />
      </Switch>
    </React.Fragment>
  )
}

export default App;
