import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommonHeader from "./components/CommonHeader";
import BookList from "./components/BookList";
import Payment from "./components/Payment";
import TopBar from "./components/fragments/TopBar";
import BookDetail from "./components/fragments/BookDetail";
import Login from "./components/Login";
import Admin from "./components/Admin";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <CommonHeader />
              <BookList category="0" />
            </Route>
            <Route exact path="/category/science">
              <CommonHeader />
              <BookList category="0" />
            </Route>
            <Route exact path="/category/computer">
              <CommonHeader />
              <BookList category="1" />
            </Route>
            <Route exact path="/category/literature">
              <CommonHeader />
              <BookList category="2" />
            </Route>
            <Route exact path="/category/history">
              <CommonHeader />
              <BookList category="3" />
            </Route>
            <Route exact path="/category/agriculture">
              <CommonHeader />
              <BookList category="4" />
            </Route>
            <Route exact path="/category/industry">
              <CommonHeader />
              <BookList category="5" />
            </Route>
            <Route exact path="/book-detail">
              <TopBar />
              <BookDetail />
            </Route>
            <Route exact path="/payment">
              <CommonHeader />
              <Payment />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
