// App.jsx
// 用於引入要使用的函式庫或程式碼檔案，與 Require（ES5語法）相同，import from為ES6+的寫法。
// Export 匯出，可以被視作是將程式碼做為一個組件的設定匯出，方便之後在其他地方重複使用（reuse）。
import React from 'react';
class Header extends React.Component {
   render() {
      return (
          <h1>header</h1>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

// App 這個組件渲染一個 Header 組件和一個表格, 在渲染 Header 這個組件的時候, 將 state 像是參數一樣命名成 title 然後傳遞給 Header 這個組件, 在 Header 裡面透過this.props.title去取得狀態並且渲染出h1標籤, 這是 state 資料從一個組件傳遞到另一個組件的用法
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}


/* 組件具有物件的概念，extend是繼承的意思，讓產生出來的組件具備一些組件可以執行的函式，像是下面的render。*/
class App extends React.Component {

    constructor(){
   	    super();
        //在這段程式碼裡面, state有一個叫做 data 和一個叫做 id 的狀態, data 這個狀態的值是一個陣列, 陣列裡面每一個元素都是一個物件, 每個物件裡面包含兩個屬性：name 和 age, 而 id 這個狀態則只有一個字串作為他的狀態值
        this.state = {
         data: 
         [
            {
               "name":"dogA",
               "age":"1"
            },
            {
               "name":"catB",
               "age":"2"
            },
            {
               "name":"pigC",
               "age":"3"
            }
         ],
         id:"Animal List"
      }
    }

    /*渲染，也就是將JSX所寫的網頁元素繪製出來的函式。要特別注意的是render一次只能產生一個標籤，若有複數個標籤共同組成一個組件，需要用巢狀的結構去進行渲染。*/
    render() {

   	  /*駝峰式語法*/
   	  var myStyle = {
        fontSize: 100,
        color: '#FF0000',
      }

   	  var i = 1;

   	  /* Return JSX 的XML-like語法 */
      return (
         <div>
            <h1>{i = 1 ? 'True' : 'False'}</h1>
            <h2 style = {myStyle}>header2</h2>
            <Header title = {this.state.id}/>
            <table>
               <tbody>
                  {this.state.data.map((animals, i) => 
                  <TableRow key = {i} data = {animals} />)}
               </tbody>
            </table>
            <Content/>
            <p>state id = {this.state.id}</p>
         </div>
      );
   }
}
export default App;