### HOC

- 高阶组件是一个函数
- 高阶组件传入一个组件，返回一个组件

**注意事项**
- 不要在render函数中写高阶组件
> react的diff算法，使用组件标识来确定他是应该更新现有子树，还是将其丢弃，然后挂载新子树，如果从render返回的子树与前一个渲染中的组件相同，则react通过将子树与新子树进行区分来递归更新子树，如果他们不相等，则完全卸载前一个子树

重新挂载组件，还会导致该组件以及其所有的子组件丢失状态
