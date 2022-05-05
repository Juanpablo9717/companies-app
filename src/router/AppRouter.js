import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CompaniesScreen from '../screens/companies/CompaniesScreen';
import HomeScreen from '../screens/home/HomeScreen';
import Navbar from './Navbar';
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="px-5 md:px-20 mt-5">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/companies" component={CompaniesScreen} />
            <Route exact path="/companie/:id" component={HomeScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;