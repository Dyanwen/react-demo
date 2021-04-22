import React, { Component, useEffect } from "react";
import Form, { Field } from "../components/my-rc-field-form";

const nameRules = { required: true };
const passwordRules = { required: true };

export default function MyRCFileldForm() {
  const [form] = Form.useForm();

  useEffect(() => {
    // form.setFieldsValue({ name: "doudian" });
  }, [form]);

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      name: "Hello world!",
      password: "male",
    });
  };

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish}>
      <Field name="name" label="name" rules={[nameRules]}>
        <input />
      </Field>

      <Field name="password" label="password" rules={[passwordRules]}>
        <input />
      </Field>

      <Field>
        <button type="primary" htmlType="submit">
          Submit
        </button>
        <button htmlType="button" onClick={onReset}>
          Reset
        </button>
        <button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </button>
      </Field>
    </Form>
  );
}
