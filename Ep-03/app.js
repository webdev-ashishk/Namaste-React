import React from "react"; //Here importarting react from node_module
import ReactDOM from "react-dom"; //Here importarting react from node_module
//<-------------Creating react element using Core React-------------->
const heading = React.createElement("h1", { id: "h1" }, "Namate react..");
//react.createElement return a object
//render method convert the object into hmtl and display to screen!
console.log(heading);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// ReactDOM.render(heading, document.getElementById("root"));
root1.render(heading);
//creating react.createElement is
//When we create Nested Structure then this code become very complex then facebook developer develop the JSX(javascript XML)

/*<-----------------------ep-03[part-03]-------------------------------------->
TS:18:12sec JSX  */
// Some developer understand that we have write HTML in side React It is not true here we have writen in jsx not html
//JSX syntex: is like html but not html;
//JSX is HTML-like or XML-like syntex
//like means (look like)

//<-------------Creating react element using JSX-------------->
// JSX=>Bable(compile)=>React.createElement =>ReactElement(js-Object)=>HTMLElement(render)

const jsxHeading = <h1 id="h1">Namaste React writen using JSX</h1>;
/* 
NOTE: 
1] javascript engine can not understand jsxheading
2] jsxheading is not javascript
Q1: How browser render the peice of code!
A: Behind the scen parcel doing this job
Entire code of app.js before goes to browser(js engine)  it will transpiled 
before goes to (js engine) after that goes to (js engine) can understand that code
Transpiled means: code will converted into That browser understand(react can understand)
Transpiled done by Parcel not completely true
parcel(manager) transpiled done by babel
Q2: What is bable
A: Bable is transCompilor(javascript compilor)

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language.




*/
console.log(jsxHeading);
root1.render(jsxHeading);
//jsxHeading is react Element--->React element is Object--->JSX is syntex

//Q2: How to write multiple line of JSX code
//A:

//Practice all JSX Syntex after that came back here !
//used file's practiceJSX.js now
//follow this doc link  https://react.dev/learn/writing-markup-with-jsx#1-return-a-single-root-element
// <---------------------Ep-03 part 03 end----------------->

const element = (
  <>
    <h1>heading-one</h1>
    <h2>Heading-two</h2>
    <h3>Heading-three</h3>
    <h4>Heading-four</h4>
    <p>This is first para</p>
    <p>This is second Para</p>
    <img
      src="https://avatars.githubusercontent.com/u/127021921?v=4"
      alt="github-photo"
    />
  </>
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(element);
