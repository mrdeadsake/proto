require('./stylesheets/application');
require('babel-polyfill');
require('bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import BasePage from './layouts/BasePage';
import TopicPage from './views/TopicPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ProtoApp from './layouts/ProtoApp';
import createBrowserHistory from 'history/createBrowserHistory';

window.env.basename = `${window.env.appURL}`
const history = createBrowserHistory({basename: window.env.location})

class Application {
  constructor () {
    this.env = null;
  }

  init({env}) {
    this.env = env;
  }
}

const app = new Application

app.init({
  env: window.env,
  }) 




window.addEventListener('load', () => {
  ReactDOM.render((
    <Provider store={store}>
    <ProtoApp
      history={history}
      />
      </Provider>
    ), window.document.getElementById('react-container'));
})

// function renderAction ({context}) {
//   console.log(context)
//   ReactDOM.render((
//       <Provider store={store}>
//           <Router>
//           <div>
//             <Switch>
//               <Route path="/Home" render={(props)=> <BasePage  context={context} {...props } root="/" pageName="Home"/> } />
//               <Route path="/topics/Health" render={ (props) => <TopicPage { ...props } root="/" pageName="Health" /> } />
//               <Route path="/topics/LivingAlone" render={ (props) => <TopicPage { ...props } root="/" pageName="Living Alone"/> } />
//               <Route path="/topics/MentallyActive" render={ (props) => <TopicPage { ...props } root="/" pageName="Mentally Active"/> } />
//               <Route path="/topics/Transportation" render={ (props) => <TopicPage { ...props } root="/" pageName="Transportation"/> } />
//               <Route path="/topics/Services" render={ (props) => <TopicPage { ...props } root="/" pageName="Services"/> } />
//             </Switch>
//           </div>
//         </Router>
//       </Provider>
//     ), document.getElementById('react-container'));
// }

// window.addEventListener('load', () => {
//  const context = {}

//   renderAction(context);
// });
