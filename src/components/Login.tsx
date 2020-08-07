import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Login extends React.Component {
  private onFinish = (values: any) => {
    console.log("Success:", values);
  };

  private onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const layout = {
      labelCol: { span: 6, offset: 3 },
      wrapperCol: { span: 6 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 8 },
    };

    return (
      <StyledLogin>
        <div className="blank-header"></div>
        <h1 className="login-title">
          欢迎登录<a href="/">西北大学网上书店！</a>
        </h1>
        <div className="blank-line"></div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            className="custom-form-item"
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名！" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Link to="/">
              <Button type="primary" size="middle" htmlType="submit">
                提交
              </Button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </Form>
      </StyledLogin>
    );
  }
}

const StyledLogin = styled.div`
  text-align: center;

  .custom-form-item {
    text-align: center;
  }

  .blank-header {
    padding: 80px;
  }

  .blank-line {
    padding: 8px;
  }
`;

export default Login;
