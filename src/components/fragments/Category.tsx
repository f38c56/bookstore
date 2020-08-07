import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

class Category extends React.Component {
  render() {
    return (
      <StyledCategories>
        <span>
          <a href="/category/science" className="science">
            科普
          </a>
          <a href="/category/computer" className="computer">
            计算机
          </a>
          <a href="/category/literature" className="literature">
            文学
          </a>
          <a href="/category/history" className="history">
            历史
          </a>
          <a href="/category/agriculture" className="agriculture">
            农业
          </a>
          <a href="/category/industry" className="industry">
            工业
          </a>
        </span>
      </StyledCategories>
    );
  }
}

const StyledCategories = styled.div`
  height: 35px;
  background: #f9f9f9;
  margin: 15px 25%;
  padding: 0px, 15px;

  * {
    font-size: 13px;
    line-height: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  a {
    color: black;
    &:hover {
      color: red;
    }
  }
`;

export default Category;
