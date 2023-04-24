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
A: In summary, an element is a simple object that represents a piece of the UI, while a component is a function or a class that creates an element.

Q3: What is Component Composition {interviewer ask}
A: Component inside component is called (component composition)
    best example is SComponent!in below!




Q4: Converting React element to React component
<=======================React element1(using react core concept)=============>
const Heading = React.createElement("h1", { id: "h1" }, "Namate react..");
<=======================React element2(using JSX  )==========================>
const Heading=(
  <h1 id="h1">Namaste react..</h1>
)
  <=======================React Component==================>
const Heading=()=>{
  return <h1 id="h1">Namste react...</h1>
}
    
Q4: What is react Element and can browser directly understand react element?
A: No, the browser cannot directly understand React elements either. React elements are JavaScript objects that describe what you want to see on the screen, but they are not valid HTML or JavaScript that can be executed by the browser.


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

/*<-----------------------ep-03[part-05]-------------------------------------->
Expressions in JSX

**JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

TS:1hr2min:10sec-
In TComponent We can putt javascript expression also 
https://www.freecodecamp.org/news/jsx-in-react-introduction/

we can write this thing two way  <TComponent></TComponent>
                                      (or)
shortway to write previous things <TComponent/>

*/
const TComponent = () => {
  return (
    <>
      <h1 id="thirdComp" className="_thirdComp">
        Third Component and h1 heading
      </h1>
      <p>Here we can Use Expression inside the Componet: {100 + 300} </p>
      <h2>{console.log("inside the heading 2")}</h2>
    </>
  );
};
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<TComponent />);
/* 
How to put react element inside the react element
*/
const childReactEle = <h2>This is child react-element</h2>;
const parentReactEle = <h1>This is Parent React Element{childReactEle}</h1>;
// console.log(parentReactEle);
const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(parentReactEle);

/* How to put reat element inside the react component
 We can also style a span Tag

*/
const ParentComponent = () => {
  return (
    (
      <span
      // style={{
      //   color: "darkblue",
      //   backgroundColor: "whitesmoke",
      //   border: "20px solid red",
      //   borderRadius: "10px",
      //   padding: "10px",
      // }}
      >
        This is Parent component{parentReactEle}
      </span>
    ),
    (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, illum?
      </p>
    )
  );
};
const root6 = ReactDOM.createRoot(document.getElementById("root6"));
root6.render(<ParentComponent />);

/* TS: 1hr48min10se

 This is very important concept ,Developer who working industry in 10year they also don't understand this think?

 Q1: How to print react Element on the Browser?
 A:  syntax:  {name-of-reactComponent}


NOTE: {} inside the bracket put down any react element which data coming from api may be using api hacker can send some data and run in my broswer and still the data
but is is not possible becoze of JSX take care of all thinks
*/

/* 

We can call functional component inside the other functional componet

Q2:There is three way to print functional component which render on browser.

1.{CallFunComp()}
2.{<CallFunComp/>}
3.{<CallFunComp></CallFunComp>}}
        1,2&3 are equivalent to each other You can check also




How to write mulptiple live of code inside the React Functional Componet

a] <div></div>                    [This will add extra Node inside the DOM]
b] <React.Fragment></React.Fragment>  [Not added extra Node inside the DOM]
c] <></>               [recomended]{This will not added extra node inside the DOM}
      a,b & c are Equivalent to each other
Q1: Where is Fragment present ?
A: Fragment Came from [import React from "react"] this file fetch from node_modules
Q2: Can React fragment present inside the react fragment?
A: Yes
Q3: Can We can Make Multiple Root
A: Yes


*/

const CallFunComp = () => {
  return (
    <>
      <p>This is First React-Fragment</p>
      <>
        <p>This is second react-fragment</p>
      </>
    </>
  );
};
const ChildComp = () => {
  return (
    <>
      <h4>This is heading 4 by ChildComp</h4>
      {CallFunComp()}
    </>
  );
};
const root7 = ReactDOM.createRoot(document.getElementById("root7"));
root7.render(<ChildComp />);
