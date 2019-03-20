import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'
import App from './App'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route exact path="/new" component={ Add } />
        <Route exact path="/edit/:postId" component={ Edit } />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
