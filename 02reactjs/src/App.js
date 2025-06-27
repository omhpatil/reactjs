import React from 'react';

function App() {

  //here i have created the react element

  const element1 = <h1>Hello, React!</h1>;
  const element2 = React.createElement('a', { href: 'https://react.dev/learn' } , 'Hello React!');

  const name = "Om Patil";
  const age = 23;


  //here we are injecting the variable inside the JSX on line no 19

  return (
    <>
    <h2>Started practicing reactjs by own</h2>
    <h4>My name is {name} and my age is {age}</h4>          
    {element1}
    {element2}
    </>
  );
}



export default App;
