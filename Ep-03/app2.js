import React from "react";
import ReactDOM from "react-dom";
/* 
TS:1hr2min:10sec-
--------------------COMPONENT-------------------->
Every things in react is component
Component are Two type
1.class base Component(old way)
2.function base component(New way)
Q1: What is React Functional Componet[RFC]
A:----->RFC are just javascript functions which return some JSX element.
                JSX is react element
------->functions which returns JSX element called RFC.
------->Javascript function that return React-element
<></> This is called fragment
==>>In functinal Component writing return is optional

              F1===F2,F3,F4

function F1() {
  <h2>This is first component</h2>;
}
function F2() {
  return <h2>This is first component</h2>; [recomended]
}
const F3 = () => {
  return <h2>This is first component</h2>;
};
const F4 = () => <h2>This is first component</h2>;

Q2: What is different b/t React Element or React functional component
Q3: What is Component Composition {interviewer ask}
A: Component inside component is called (component composition)
    best example is SComponent!in below!
Q4: Converting React element to React component
<=======================React element==========================>
const Heading = React.createElement("h1", { id: "h1" }, "Namate react..");
  <=======================React Component==================>
const Heading=()=>{
  return <h1 id="h1">Namste react...</h1>
}
    */

function FComponent() {
  return <h2>This is first component</h2>;
}
// const root3 = ReactDOM.createRoot(document.getElementById("root3"));
// root3.render(<fComponent />);
function SComponent() {
  return (
    <>
      <h1>This is second component</h1>
      <h2>This is still second component</h2>
      <FComponent />
    </>
  );
}
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<SComponent />);
