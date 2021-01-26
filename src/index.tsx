import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    setTimeout(() => {
      // ?.firstChild 是因为有可能是null,null.firstChild就报错，
      // 加上个?.firstChild，就可以兼容了
      // console.log('dsag', document.getElementById('root1')?.firstChild)

      // 卸载的两种操作：1 我们肯定document.getElementById('root')存在的，删掉里面的第一个元素
      // ((document.getElementById('root') as HTMLElement).firstChild as HTMLElement).remove()
      
      //  ReactDOM.unmountComponentAtNode删除
      // 接收个dom节点作为容器，删掉容器里面的。
      ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLElement)
    }, 3000)
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
