import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
  // useLocation
} from "react-router-dom";
import CommonHeader from "./components/CommonHeader";
import BookList from "./components/BookList";
import Payment from "./components/Payment";
import TopBar from "./components/fragments/TopBar";
import BookDetail from "./components/fragments/BookDetail";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
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
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/admin/user/delete">
              <DeleteUser />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function DeleteUser() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Delete Users</h2>

      <Switch>
        <Route path={`${match.path}/:userId`}>
          <DeletedUser />
        </Route>
        <Route path={match.path}>
          <h3>Please delete a user.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function DeletedUser() {
  let { userId } = useParams();
  console.log(userId);
  return <h3>Requested user ID: {userId}</h3>;
}

export default App;
