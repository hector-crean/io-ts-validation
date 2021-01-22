
import './app.scss';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Header
import CarbonHeader from './components/header/carbon-header/CarbonHeader'; 
import MaterialHeader from './components/header/material-header/MaterialHeader';  
// Pages
import Builder3DPage from './page/builder3D-page/Builder3DPage'; 
import ComponentInFocusPage from './page/component-in-focus-page/ComponentInFocus'; 
import AnalyticsPage from './page/analytics-page/AnalyticsPage'; 


//Global state: setup scene graph -> 



interface AppProps {
}


const App = ({}: AppProps) => {



  

 return (

<Router>

  {/* <MaterialHeader/> */}


  <Switch>
     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
      <Route path="/infocus" component={ComponentInFocusPage} /> 

      <Route path='/analytics' component={AnalyticsPage} />

      <Route path="/" component={Builder3DPage} /> 

  </Switch>        
  

</Router>

 )
}
export default App;