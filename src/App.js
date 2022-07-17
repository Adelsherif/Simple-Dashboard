import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Links from './components/links/links';
import Header from './components/header/header';
import Statistics from './components/statistics/statistics';
import Recent from './components/recentevents/recent';
import Content from './components/content/content';



function App (){
 return (
    <div className="app">
     <Links/>
      <Router>
       <Switch>
        <Route exact path='/' >
         <Header/>
         <Statistics/>
         <Recent />
       </Route>
          <Route exact path='*' >
              <Header />
              <Content />
          </Route>
      </Switch>
     </Router>
   </div>
  );
}


export default  App;

