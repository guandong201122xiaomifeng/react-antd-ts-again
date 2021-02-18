import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Protal from './Protal'
import reportWebVitals from './reportWebVitals';
import B from './HOC/B'
let app:any
ReactDOM.render(
  <React.StrictMode>
    {/* <App ref={node => app = node}/> */}
    <Protal/>
    <B/>
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    // 这是app已经是App的实例，可以调用里面的方法比如componentWillUnmount。
    console.log('app', app)
    // app.componentWillUnmount()

    // findDOMNode参数是一个组件实例,找到app实例对应的真实dom节点
    // console.log('findDOMNode', ReactDOM.findDOMNode(app))
  }
  // () => {
  //   setTimeout(() => {
  //     // ?.firstChild 是因为有可能是null,null.firstChild就报错，
  //     // 加上个?.firstChild，就可以兼容了
  //     // console.log('dsag', document.getElementById('root1')?.firstChild)

  //     // 卸载的两种操作：1 我们肯定document.getElementById('root')存在的，删掉里面的第一个元素
  //     // ((document.getElementById('root') as HTMLElement).firstChild as HTMLElement).remove()
      
  //     //  ReactDOM.unmountComponentAtNode删除
  //     // 接收个dom节点作为容器，删掉容器里面的。
  //     ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLElement)
  //   }, 3000)
  // }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
