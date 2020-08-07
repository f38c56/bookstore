import React from "react";
import styled from "styled-components";
import { Card, Button, message } from "antd";
import { ShoppingCartOutlined, LikeOutlined } from "@ant-design/icons";
import { sliceString } from "../utils";
import { Link } from "react-router-dom";

interface MyProps {
  name: string;
  cover: string;
  description: string;
  isbn: string;
}

class BookPreview extends React.Component<MyProps> {
  addToCartMessage = () => {
    message.success(`已将《${this.props.name}》添加到购物车`);
  };

  likeMessage = () => {
    message.info(`已为《${this.props.name}》点赞`);
  };

  render() {
    const { Meta } = Card;
    const { name, cover, description } = this.props;

    return (
      <StyledBookPreview>
        <Link to={`/book-detail?isbn=${this.props.isbn}`}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={name} src={cover} />}
            className="preview-card"
          >
            <Meta
              className="meta-height"
              title={name}
              description={sliceString(description)}
            />
          </Card>
        </Link>
        <StyledButton>
          <Button size="middle" onClick={this.addToCartMessage}>
            <ShoppingCartOutlined />
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button size="middle" onClick={this.likeMessage}>
            <LikeOutlined />
          </Button>
        </StyledButton>
      </StyledBookPreview>
    );
  }
}

const StyledBookPreview = styled.div`
  display: inline-block;
  margin: 10px 0;
  position: relative;

  .preview-card {
    height: 300px;
  }

  .ant-card-cover {
    height: 146.5px;
  }

  img {
    width: 100px;
    margin-bottom: 20px;
  }

  .book-name {
    position: absolute;
    bottom: 0;
    width: 100px;
  }

  a {
    text-decoration: none;
  }

  .meta-height {
    height: 205px;
  }
`;

const StyledButton = styled.div`
  margin: 15px 0 0 0;
`;

export default BookPreview;
