import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface myState {
  user: any;
}

class TopBar extends React.Component<any, myState, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: localStorage.getItem("user"),
    };
  }

  login = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "0002",
        name: "胡尧",
        type: "管理员",
        email: "1234567890@gmail.com",
      })
    );
    this.setState({
      user: localStorage.getItem("user"),
    });
  };

  logout = () => {
    localStorage.removeItem("user");
    this.setState({
      user: localStorage.getItem("user"),
    });
  };

  render() {
    const userData = JSON.parse(this.state.user);
    console.log("当前用户", userData);
    if (userData === null) {
      return (
        <StyledTopBar>
          <span className="top-bar">
            欢迎光临西北大学网上书店，
            <Link to="/login" className="login" onClick={this.login}>
              请登录
            </Link>
            &nbsp;|&nbsp;
            <Link to="#" className="be-member">
              成为会员
            </Link>
          </span>
        </StyledTopBar>
      );
    } else if (userData.type === "管理员") {
      return (
        <StyledTopBar>
          <span className="top-bar">
            欢迎光临西北大学网上书店，
            <Link to="#" className="login">
              {userData.name}
            </Link>
            &nbsp;|&nbsp;
            <Link to="/admin" className="be-member">
              进入后台
            </Link>
            &nbsp;|&nbsp;
            <Link to="#" className="admin-login-button" onClick={this.logout}>
              退出登陆
            </Link>
          </span>
        </StyledTopBar>
      );
    } else {
      return (
        <StyledTopBar>
          <span className="top-bar">
            欢迎光临西北大学网上书店，
            <Link to="/login" className="login">
              {userData.name}
            </Link>
            &nbsp;|&nbsp;
            <Link to="#" className="be-member">
              成为会员
            </Link>
            &nbsp;|&nbsp;
            <Link to="#" className="admin-login-button" onClick={this.logout}>
              退出登陆
            </Link>
          </span>
        </StyledTopBar>
      );
    }
  }
}

const StyledTopBar = styled.div`
  height: 35px;
  text-align: center;

  * {
    font-size: 15px;
    line-height: 35px;
  }

  a {
    text-decoration: none;
  }

  // a.login {
  //   color: red;
  // }

  a.be-member {
    color: black;
    &:hover {
      color: red;
    }
  }
`;

export default TopBar;
