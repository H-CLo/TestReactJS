// App.jsx
// 用於引入要使用的函式庫或程式碼檔案，與 Require（ES5語法）相同，import from為ES6+的寫法。
import React from 'react';

// 組件具有物件的概念，extend是繼承的意思，讓產生出來的組件具備一些組件可以執行的函式，像是下面的render。
class App extends React.Component {
   // 渲染，也就是將JSX所寫的網頁元素繪製出來的函式。要特別注意的是render一次只能產生一個標籤，若有複數個標籤共同組成一個組件，需要用巢狀的結構去進行渲染。
   render() {
   	  // 駝峰式語法
   	  var myStyle = {
        fontSize: 100,
        color: '#FF0000'
      }

   	  var i = 1;
   	  /* Return JSX 的XML-like語法 */
      return (
         <div>
            <h1>{i = 1 ? 'True' : 'False'}</h1>
            <h2 style = {myStyle}>header2</h2>
         </div>
      );
   }
}
export default App;
匯出，可以被視作是將程式碼做為一個組件的設定匯出，方便之後在其他地方重複使用（reuse）。