import React from "react";
import styled from "styled-components";
import BookPreview from "./fragments/BookPreview";
import { PUBLIC_URL } from "./constants";

interface MyProps {
  category: string;
}

interface MyState {
  bookList: Book[];
}

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

class BookList extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookList: [],
    };
  }

  async componentDidMount() {
    console.log(this.props.category);
    const res = await fetch(
      `${PUBLIC_URL}/mock/booklist-${this.props.category}.json`
    );
    const data = await res.json();
    console.log(data);

    this.setState({
      bookList: data,
    });
  }

  renderList() {
    const { bookList } = this.state;

    return bookList
      .map((book) => {
        return (
          <BookPreview
            key={book.isbn}
            name={book.name}
            cover={PUBLIC_URL + "/" + book.cover}
            description={book.description}
            isbn={book.isbn}
          />
        );
      });
  }

  render() {
    return (
      <StyledBookList>
        {this.state.bookList ? this.renderList() : null}
      </StyledBookList>
    );
  }
}

const StyledBookList = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;

  .ant-card-cover {
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

export default BookList;
