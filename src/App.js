import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Sidebar from  "./Sidebar";
import Mail from "./Mail.jsx";
import EmailList from "./EmailList";
import store from "./features/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
       <div className="App">
      <Router>
        <Header/>
        
      <div className="app_body">
      <Sidebar/>
      
      <Switch>
        <Route path="/mail/:id"  component={Mail}/>
          

        <Route path="/" component={EmailList}/>

      </Switch>
      
      </div>
       </Router>
      
    </div>
 
    </Provider>
    );
}

export default App;
