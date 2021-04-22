import React from "react";

class FormStore {
  constructor() {
    // 存储数据，比如usename，passwprd
    this.store = {};
  }
  setFieldsValue = () => {};
  // 取数据
  getFieldValue = (name) => {
    return this.store[name];
  };
  getFiledsValue = () => {
    return this.store;
  };
  getForm() {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      getFiledsValue: this.getFiledsValue,
    };
  }
}
// usehook可以共享逻辑
export default function useForm() {
  const formRef = React.useRef();
  if (!formRef.current) {
    const formStore = new FormStore();
    formStore.current = formStore.getForm();
  }
  return [formRef.current];
}
