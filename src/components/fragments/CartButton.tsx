import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

class CartButton extends React.Component {
  render() {
    return (
      <Link to="/payment">
        <StyledCartButton>
          <Button type="primary">
            <ShoppingCartOutlined />
            购物车
          </Button>
        </StyledCartButton>
      </Link>
    );
  }
}

const StyledCartButton = styled.div`
  .ant-btn-primary {
    background: #ff4d4f;
    border: #ff4d4f;
  }
`;

export default CartButton;
