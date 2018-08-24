import React from 'react';
import ProtoApp from './layouts/ProtoApp';
import BasePage from './layouts/BasePage';
import TopicPage from './views/topicPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export default function routes (topics) {
    return (
      <Switch>
              <Route path="/Home" render={(props)=> <BasePage {...props } root="/" pageName="Home"/> } />
              { 
                topics.map((topic) => {
                  return( <Route key={topic} path={`/topics/${topic.replace(' ','')}`} render={ (props) => <TopicPage {...props} root="/" pageName={topic} /> } />)
              })}
              <Redirect exact path="/" to="/Home"/>
              </Switch>
    );
}
