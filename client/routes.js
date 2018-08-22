import React from 'react';
import ProtoApp from './layouts/ProtoApp';
import BasePage from './layouts/BasePage';
import TopicPage from './views/topicPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export default function routes () {
    return (
            <Switch >
              <Route path="/Home" render={(props)=> <BasePage {...props } root="/" pageName="Home"/> } />
              <Route path="/topics/Health" render={ (props) => <TopicPage { ...props } root="/" pageName="Health" /> } />
              <Route path="/topics/LivingAlone" render={ (props) => <TopicPage { ...props } root="/" pageName="Living Alone"/> } />
              <Route path="/topics/MentallyActive" render={ (props) => <TopicPage { ...props } root="/" pageName="Mentally Active"/> } />
              <Route path="/topics/Transportation" render={ (props) => <TopicPage { ...props } root="/" pageName="Transportation"/> } />
              <Route path="/topics/Services" render={ (props) => <TopicPage { ...props } root="/" pageName="Services"/> } />
              <Redirect path="/" to="/Home"/>
            </Switch>
    );
}
