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

  changer = (etat) => {
    this.setState({
      loggedIn : etat
    })
  }

    MonHeader = (props) => {
      return (
        <MyHeader 
          etat={this.changer}          
        />
      );
    }

    MonFooter = (props) => {
      return (
        <MyFooter
          etat={this.changer}
        />
      )
    })
  
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" render={this.MonHeader}/>          
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
          <Route path="/" render={this.MonFooter} method={this.changer}/>
        </div>
      </Router>
    );
  }
}

export default App;
