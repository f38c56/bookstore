import React from "react";
import styled from "styled-components";
import { PUBLIC_URL } from "../constants";
import { Row, Col, Descriptions, Button, notification } from "antd";

interface Book {
  amount: string;
  author: string;
  category: string;
  cover: string;
  description: string;
  isbn: string;
  name: string;
  price: string;
  publish_date: string;
  publisher: string;
}

interface MyState {
  selectedBook: Book;
}

class BookDetail extends React.Component<any, MyState, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedBook: {
        amount: "",
        author: "",
        category: "",
        cover: "",
        description: "",
        isbn: "",
        name: "",
        price: "",
        publish_date: "",
        publisher: "",
      },
    };
  }

  openNotification = () => {
    notification.open({
      message: "加入成功",
      description:
        `已将《${this.state.selectedBook.name}》加入购物车`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 2,
    });
  };

  async componentDidMount() {
    const res = await fetch(`${PUBLIC_URL}/mock/booklist-0.json`);
    const books: Book[] = await res.json();
    books.forEach((book) => {
      if (book.isbn === this.getISBN()) {
        this.setState({
          selectedBook: book,
        });
      }
    });
  }

  private getISBN(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    let isbn: string | null = urlParams.get("isbn");
    return isbn;
  }

  render() {
    const imageURL: string = PUBLIC_URL + "/" + this.state.selectedBook.cover;
    return (
      <StyledBookDetail>
        <Row>
          <Col span={7}>
            <div className="left">
              <img
                alt={this.state.selectedBook.name}
                src={imageURL}
                width="70%"
              />
              <br />
              <br />
              <a href="/">
                <h4>回到首页</h4>
              </a>
            </div>
          </Col>
          <Col span={17}>
            <div className="right">
              <h1>{this.state.selectedBook.name}</h1>

              <Descriptions bordered={true} column={1}>
                <Descriptions.Item label="书名">
                  {this.state.selectedBook.name}
                </Descriptions.Item>
                <Descriptions.Item label="作者">
                  {this.state.selectedBook.author}
                </Descriptions.Item>
                <Descriptions.Item label="分类">
                  {this.state.selectedBook.category}
                </Descriptions.Item>
                <Descriptions.Item label="描述">
                  {this.state.selectedBook.description}
                </Descriptions.Item>
                <Descriptions.Item label="价格">
                  {this.state.selectedBook.price} 元
                </Descriptions.Item>
                <Descriptions.Item label="数量">
                  {this.state.selectedBook.amount}
                </Descriptions.Item>
                <Descriptions.Item label="出版日期">
                  {this.state.selectedBook.publish_date}
                </Descriptions.Item>
                <Descriptions.Item label="出版商">
                  {this.state.selectedBook.publisher}
                </Descriptions.Item>
                <Descriptions.Item label="购买">
                  <Button type="primary" onClick={this.openNotification}>
                    加入购物车
                  </Button>
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Col>
        </Row>
      </StyledBookDetail>
    );
  }
}

const StyledBookDetail = styled.div`
  margin: 20px;

  .left {
    padding: 50px 10px;
  }

  .right {
    padding: 10px;
  }

  .bottom {
    padding: 10px;
  }

  .bottom .push-left {
    text-align: left;
  }

  .bottom .push-right {
    text-align: right;
  }
`;

export default BookDetail;
