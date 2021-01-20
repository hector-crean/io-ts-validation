
import './app.scss';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";







// Pages

import Editor from './components/3d-editor/Editor'
import GreetingPage from './page/greeting-page/GreetingPage'; 



interface AppProps {
}


const App = ({}: AppProps) => {

 return (
<Router>
    
    
   
  <Switch>
      <Route path="/" component={Editor} /> 
      {/* <Route path="/" component={GreetingPage} />  */}

  </Switch>        
  

</Router>

 )
}
export default App;