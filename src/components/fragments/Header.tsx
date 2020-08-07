import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
// import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <SearchBar />
        <CartButton />
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  margin: 10px 36%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Header;
