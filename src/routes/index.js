import React from 'react'
import {Route} from 'react-router-dom'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'


const createRoutes = () => {
  return (
    <div className="App">
      <Route
        exact
        path='/'
        component={TicTacToe}
      />
      <Route
        exact
        path={'/profile'}
        component={Profile}
      />
    </div>
  )
}
const Routes = createRoutes();
  
export default Routes