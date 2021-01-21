
import './app.scss';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// Pages

import Editor from './components/3d-editor/Editor'
import ComponentInFocus from './page/component-in-focus-page/ComponentInFocus'; 



//Global state: setup scene graph -> 



interface AppProps {
}


const App = ({}: AppProps) => {



  

 return (
<Router>
    
  <Switch>
     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
      <Route path="/infocus" component={ComponentInFocus} /> 

      <Route path="/" component={Editor} /> 

  </Switch>        
  

</Router>

 )
}
export default App;