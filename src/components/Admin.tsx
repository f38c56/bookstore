import React from "react";
import { Layout, Menu, Tag, Table } from "antd";
import { PUBLIC_URL } from "./constants";
import styled from "styled-components";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
// eslint-disable-next-line
const { Header, Content, Footer, Sider } = Layout;

class Admin extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    list: [],
  };

  async componentDidMount() {
    const res = await fetch(`${PUBLIC_URL}/mock/people.json`);
    const data = await res.json();

    this.setState({
      initLoading: false,
      list: data,
    });
  }

  render() {
    const { list } = this.state;

    const columns = [
      {
        title: "用户ID",
        dataIndex: "id",
        key: "id",
        width: 200,
      },
      {
        title: "用户名",
        dataIndex: "name",
        key: "name",
        width: 200,
      },
      {
        title: "用户邮箱",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "用户种类",
        dataIndex: "type",
        key: "type",
        render: (typeName: any) => {
          let color = "";
          if (typeName === "管理员") {
            color = "red";
          } else {
            color = "blue";
          }
          return (
            <Tag color={color} key={typeName}>
              {typeName}
            </Tag>
          );
        },
      },
    ];

    return (
      <StyledAdmin>
        <Layout>
          <Header>
            <div className="header-title">
              <a href="/">网上书店后台管理系统</a>
            </div>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Layout style={{ padding: "25px 0", background: "#fff" }}>
              <Sider width={220} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <UserOutlined />
                        会员管理
                      </span>
                    }
                  >
                    <Menu.Item key="1">会员检索</Menu.Item>
                    <Menu.Item key="2">添加会员</Menu.Item>
                    <Menu.Item key="3">删除会员</Menu.Item>
                    <Menu.Item key="4">更新会员</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <LaptopOutlined />
                        图书管理
                      </span>
                    }
                  >
                    <Menu.Item key="5">图书检索</Menu.Item>
                    <Menu.Item key="6">添加图书</Menu.Item>
                    <Menu.Item key="7">删除图书</Menu.Item>
                    <Menu.Item key="8">更新图书</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <NotificationOutlined />
                        订单管理
                      </span>
                    }
                  >
                    <Menu.Item key="9">订单检索</Menu.Item>
                    <Menu.Item key="10">添加订单</Menu.Item>
                    <Menu.Item key="11">删除订单</Menu.Item>
                    <Menu.Item key="12">更新订单</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: "0 10px" }}>
                <div style={{ padding: "0 35px" }}>
                  <Table
                    rowKey={(record: any) => record.id}
                    dataSource={list}
                    columns={columns}
                  />
                </div>
              </Content>
            </Layout>
          </Content>
        </Layout>
      </StyledAdmin>
    );
  }
}

const StyledAdmin = styled.div`
  .ant-layout-content {
    margin: 0;
    padding: 0 !important;
  }

  .search-input {
    width: 400px !important;
    margin: 0 300px;
  }
  .ant-layout-footer {
    padding: 0px;
  }

  .ant-layout-footer {
    background: white;
  }

  a {
    color: white;
  }

  .header-title {
    font-size: 1.3em;
    text-align: left;
    color: white;
  }
`;

export default Admin;
