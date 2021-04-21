import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };
export default class AntdFormPage extends Component {
  formRef = React.createRef();

  componentDidMount() {
    console.log(this.formRef);
    this.formRef.current.setFieldsValue({ name: "default" });
  }

  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFinish = (val) => {
    console.log("onFinish", val);
  };
  onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };

  render() {
    return (
      <div>
        <h3>AntdFormPage</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          onReset={this.onReset}
        >
          <Form.Item label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="name input placeholder" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[passworRules]}>
            <Input placeholder="password input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="default" size="large" htmlType="reset">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
