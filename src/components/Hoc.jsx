import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import TodoCard, { withCompletedTodo } from "./TodoCard";

export default function Hoc() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);
  async function fetchTodo() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    setTodo(json);
  }

  // console.log(todo[0].completed);
  const CompletedTodo = withCompletedTodo(TodoCard);

  return todo.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>LIST OF TODO</h1>
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <TodoCard todo={todo} /> */}
        {/* {todo.completed ? (
        <CompletedTodo todo={todo} />
      ) : (
        <TodoCard todo={todo} />
      )} */}
        {todo.map((singleTodo) => {
          return (
            <div>
              {singleTodo.completed ? (
                <CompletedTodo single={singleTodo} />
              ) : (
                <TodoCard single={singleTodo} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
