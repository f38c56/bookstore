import React from "react";
import styled from "styled-components";
import { PUBLIC_URL } from "./constants";
// eslint-disable-next-line
import { randomNonNegativeNumber, sliceString } from "./utils";
import { Table, InputNumber, Button, message } from "antd";

interface MyState {
  initLoading: boolean;
  loading: boolean;
  list: Book[];
  totalPrice: number;
}

interface Book {
  amount: number;
  author: string;
  category: string;
  cover: string;
  description: string;
  isbn: string;
  name: string;
  price: number;
  publish_date: string;
  publisher: string;
}

class Payment extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    let list = [
      {
        isbn: "9787550272590",
        name: "宽容",
        author: "亨德里克·威廉·房龙",
        publisher: "北京联合出版公司",
        price: 28.5,
        cover: "images/books/kuan_rong.jpg",
        category: "历史",
        amount: 6,
        description:
          "《宽容》是美国著名学者房龙的代表作之一，是一部关于自由和思想解放的人文经典力作。",
        publish_date: "2016-11",
      },
      {
        isbn: "9787010060064",
        name: "大国崛起",
        author: "唐晋 ",
        publisher: "人民出版社",
        price: 51.2,
        cover: "images/books/da_guo_jue_qi.jpg",
        category: "历史",
        amount: 8,
        description:
          "《大国崛起》在尊重历史事实的基础上以历史故事的形式，运用富有思辨性的语言，描述了自15世纪以来葡萄牙、西班牙、荷兰、英国、法国、德国、日本、 俄罗斯、美国九个国家竞相登上世界舞台中心的历程。",
        publish_date: "2007-01",
      },
      {
        isbn: "23770142",
        name: "南渡北归",
        author: "岳南",
        publisher: "湖南文艺出版社",
        price: 190.8,
        cover: "images/books/nan_du_bei_gui.jpg",
        category: "历史",
        amount: 2,
        description:
          "本套书为全新经典版，纪念抗战胜利七十周年隆重推出！书中引用了台湾中研院大量珍贵史料、照片，以及大量亲历者采访资料，如曾氏家族后人、刘文典等大师后人亲述。",
        publish_date: "2015-09",
      },
      {
        isbn: "9787101113525",
        name: "史记",
        author: "司马迁",
        publisher: "中华书局",
        price: 19.3,
        cover: "images/books/shi_ji.jpg",
        category: "历史",
        amount: 3,
        description: "史家之绝唱，无韵之离骚",
        publish_date: "2016-01",
      },
      {
        isbn: "9787535732309",
        name: "时间简史",
        author: "史蒂芬·霍金",
        publisher: "湖南科技出版社",
        price: 32.4,
        cover: "images/books/shi_jian_jian_shi.jpg",
        category: "科普",
        amount: 2,
        description:
          "史蒂芬·霍金的《时间简史》自1988年首版以来的岁月里，已成为全球科学著作的里程碑。它被翻译成40种文字，销售了近1000万册，成为国际出版史上的奇观。该书内容是关于宇宙本性的前沿知识，但是从那以后无论在微观还是宏观宇宙世界的观测技术方面都有了非凡的进展。",
        publish_date: "2014-06",
      },
      {
        isbn: "9787521705799",
        name: "人类的未来",
        author: "加来道雄",
        publisher: "中信出版社",
        price: 51.7,
        cover: "images/books/ren_lei_de_wei_lai.jpg",
        category: "科普",
        amount: 3,
        description:
          "重新认识宇宙的时间与空间边界，重新定义人类智慧与宇宙文明的关系，重新探索物种起源与人类未来的宿命转折",
        publish_date: "2019-07",
      },
    ];
    this.state = {
      initLoading: true,
      loading: false,
      list: list,
      totalPrice: 0,
    };
  }

  renderImage = (cover: string) => {
    let imageURL: string = PUBLIC_URL + "/" + cover;
    return <img alt="demo" src={imageURL} className="demo-image"></img>;
  };

  checkBill = () => {
    let bill = 0;
    const { list } = this.state;
    list.forEach((book) => {
      let money = book.amount * book.price;
      bill += money;
    });
    message.success(`已支付 ${bill} 元`);
  };

  private removeItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const name = event.currentTarget.getAttribute("value");
    // console.log(name);
    let tmpList = [...this.state.list];
    for (let i = 0; i < tmpList.length; i++) {
      if (tmpList[i].name === name) {
        tmpList.splice(i, 1);
      }
    }
    this.setState({
      list: tmpList,
    });
    console.log(this.state.list);
    message.success(`已移除《${name}》`);
  };

  render() {
    const { list } = this.state;

    const columns = [
      {
        title: "封面",
        dataIndex: "cover",
        key: "cover",
        render: this.renderImage,
      },
      {
        title: "书名",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "描述",
        dataIndex: "description",
        key: "description",
        render: (description: string) => sliceString(description),
      },
      {
        title: "单价",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "购买数量",
        key: "amount",
        dataIndex: "amount",
        render: (amount: string) => {
          return (
            <InputNumber
              size="small"
              min={1}
              max={100000}
              defaultValue={Number(amount)}
            ></InputNumber>
          );
        },
      },
      {
        title: "操作",
        key: "operation",
        dataIndex: "name",
        render: (name: string) => (
          <Button
            type="default"
            danger
            size={"small"}
            value={name}
            onClick={this.removeItem}
          >
            移除
          </Button>
        ),
      },
    ];

    return (
      <StyledPayment>
        <Table
          columns={columns}
          dataSource={list}
          rowKey={(record) => record.isbn}
        />
        <Button
          type="primary"
          size="large"
          className="check-button"
          danger
          onClick={this.checkBill}
        >
          结算
        </Button>
      </StyledPayment>
    );
  }
}

const StyledPayment = styled.div`
  padding: 10px 50px;

  .demo-image {
    width: 60px;
  }

  .check-button {
    float: right;
    width: 110px;
  }
`;

export default Payment;
