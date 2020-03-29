import React from 'react';

var aaa = "REACT";
var bbb = "AAA";
var a = 1;
var b = 2;

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        Hello React - {aaa} : {a+=b}
        {a+b}
      </header>
    </div>
  );
}

export default App;
