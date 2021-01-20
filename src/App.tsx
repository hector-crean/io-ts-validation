
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
      <Route path="/" component={Editor} /> 
      <Route path="/in-focus" component={ComponentInFocus} /> 

  </Switch>        
  

</Router>

 )
}
export default App;