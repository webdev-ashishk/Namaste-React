// const heading = React.createElement("h1", {}, "Hello World From React!");
// ReactDOM.render(heading, document.getElementById("root"));
//-------------------------timeStamp: 46min------------>
/* 
Target is build 
<h1>hellow world from React</h1>
*/
//Note: what is empty object in Line:number-1
//Giving Attribute to the class
const heading = React.createElement(
  "h1",
  { id: "heading", class: "ch1" },
  "Hello World From React!"
);
console.log(heading); //return object(react element)
//render method takes heading and converted into heading tag putt is to DOM
ReactDOM.render(heading, document.getElementById("root"));

//<--------------timeStamp: 55min 8sec------------------->
// How to create Nested HTML structure inside your React Appication
//like below
/* this is model we need to build using react
<div id="parent">
  <div id="child">
    <h2>I am h2 tag</h2>
    <h3>I am h2 tag</h3>
  </div>
</div>;
*/
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h2", {}, "I am h2 tag"),
//     React.createElement("h3", {}, "I am h3 tag"),
//   ])
// );
// console.log(parent); //return object(react element)
// ReactDOM.render(parent, document.getElementById("root2"));

//------------------- timestamp:1hr 4min 4sec---------------------------->
/*  this is model we need to build using react
<div id="parent">
  <div id="child1">
    <h2>I am h2 tag</h2>
    <h3>I am h2 tag</h3>
  </div>
  <div id="child2">
    <h2>I am h2 tag</h2>
    <h3>I am h2 tag</h3>
  </div>
</div>;
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", {}, "I am h2 tag"),
    React.createElement("h3", {}, "I am h3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h4", {}, "I am h4 tag"),
    React.createElement("h5", {}, "I am h5   tag"),
  ]),
]);
console.log(parent); //return object(react element)
ReactDOM.render(parent, document.getElementById("root3"));
//Above methods are very tedius and real life project we use JSX

//-------------- timeStamp: 1hr 8min 2sec-------------------------------->
//episode01-part5

