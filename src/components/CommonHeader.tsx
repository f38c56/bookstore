import React from "react";
import TopBar from "./fragments/TopBar";
import Header from "./fragments/Header";
import Categories from "./fragments/Category";

class CommonHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Header />
        <Categories />
      </React.Fragment>
    );
  }
}

export default CommonHeader;