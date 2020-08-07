import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

class SearchBar extends React.Component {
  render() {
    return (
      <StyledSearchBarContainer>
        <Search
          placeholder="请输入要搜索的图书"
          onSearch={(value) => console.log(value)}
          enterButton
        />
      </StyledSearchBarContainer>
    );
  }
}

const StyledSearchBarContainer = styled.div`
  position: relative;

  .ant-btn-primary {
    background: #ff4d4f;
    border: #ff4d4f;
  }
`;

export default SearchBar;
