import React from "react";
// eslint-disable-next-line
import { Layout, Menu, message, Table, Button, Input, Form, Select } from "antd";
import { PUBLIC_URL } from "../constants";
import styled from "styled-components";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Route, Switch, Link } from "react-router-dom";

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

  private removeItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const id = event.currentTarget.getAttribute("value");
    console.log(id);
    let tmpList: any[] = [...this.state.list];
    for (let i = 0; i < tmpList.length; i++) {
      if (tmpList[i].id === id) {
        message.success(`已移除${tmpList[i].name}`);
        tmpList.splice(i, 1);
      }
    }
    this.setState({
      list: tmpList,
    });
    console.log(this.state.list);
    // message.success(`已移除${id}用户`);
  };

  render() {
    const { list } = this.state;
    let url = window.location.href;
    console.log("url参数为: ", url);

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
            // <Tag color={color} key={typeName}>
            //   {typeName}
            // </Tag>
            <Button color={color} size="small">
              {typeName}
            </Button>
          );
        },
      },
    ];

    const deleteColumns = [
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
        title: "操作",
        dataIndex: "id",
        key: "operation",
        render: (id: any) => {
          return (
            <Button danger type="primary" size="small" value={id} onClick={this.removeItem}>
              删除
            </Button>
          );
        },
      },
    ];

    const editColumns = [
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
        title: "操作",
        dataIndex: "type",
        key: "type",
        render: (typeName: any) => {
          return (
            <Button type="primary" size="small">
              修改
            </Button>
          );
        },
      },
    ];

    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

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
                    <Menu.Item key="1">
                      <Link to="/admin" style={{ color: "black" }}>
                        会员检索
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/admin/user/add" style={{ color: "black" }}>
                        添加会员
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                      <Link to="/admin/user/delete" style={{ color: "black" }}>
                        删除会员
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to="/admin/user/edit" style={{ color: "black" }}>
                        更新会员
                      </Link>
                    </Menu.Item>
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
              <Switch>
                <Route exact path="/admin">
                  <Content style={{ padding: "0 10px" }}>
                    <div style={{ padding: "0 35px" }}>
                      <Table
                        rowKey={(record: any) => record.id}
                        dataSource={list}
                        columns={columns}
                      />
                    </div>
                  </Content>
                </Route>
                <Route exact path="/admin/user/delete">
                  <Content style={{ padding: "0 10px" }}>
                    <div style={{ padding: "0 35px" }}>
                      <Table
                        rowKey={(record: any) => record.id}
                        dataSource={list}
                        columns={deleteColumns}
                      />
                    </div>
                  </Content>
                </Route>
                <Route exact path="/admin/user/edit">
                  <Content style={{ padding: "0 10px" }}>
                    <div style={{ padding: "0 35px" }}>
                      <Table
                        rowKey={(record: any) => record.id}
                        dataSource={list}
                        columns={editColumns}
                      />
                    </div>
                  </Content>
                </Route>
                <Route exact path="/admin/user/add">
                  <div style={{ width: "40%", padding: "50px" }}>
                    <Form
                      {...layout}
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        label="用户ID"
                        name="userid"
                        rules={[
                          {
                            required: true,
                            message: "请输入用户ID",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "请输入用户名",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="用户种类"
                        name="usertype"
                        rules={[
                          {
                            required: true,
                            message: "请选择用户种类",
                          },
                        ]}
                      >
                        <Select>
                          <Select.Option value="admin">管理员</Select.Option>
                          <Select.Option value="user">会员</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "请输入密码",
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>

                      {/* <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item> */}

                      <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                          提交
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Route>
              </Switch>
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

  menu-link {
    color: white;
  }

  .header-title {
    font-size: 1.3em;
    text-align: left;
    color: white;
  }
`;

export default Admin;
