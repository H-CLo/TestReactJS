// App.jsx
import React from 'react';

class App extends React.Component {
   render() {
   	  /* You cannot see me */
   	  var myStyle = {
        fontSize: 100, // 駝峰式語法
        color: '#FF0000'
      }

   	  var i = 1;
      return (
         <div>
            <h1>{i = 1 ? 'True' : 'False'}</h1>
            <h2 style = {myStyle}>header2</h2>
         </div>
      );
   }
}
export default App;
