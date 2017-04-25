import React, { Component } from 'react';
import {Router, Route, Redirect} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import MyHeader from "./MyHeader/MyHeader.js";
import IndexPage from "./IndexPage/IndexPage.js";
import AdminPage from "./AdminPage/AdminPage.js";
import WorkBook from "./WorkBook/WorkBook.js";
import MyFooter from "./MyFooter/MyFooter.js";
import './App.css';

const history = createBrowserHistory();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false
    }
  }
  
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={MyHeader} />          
          <Route
            exact path="/"
            render={() => (
              this.state.loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <IndexPage />
              )            
            )}/>
          <Route path="/admin" component={AdminPage} />
          <Route path="/dashboard" component={WorkBook} />
          <Route path="/" component={MyFooter} />
        </div>
      </Router>
    );
  }
}

export default App;
