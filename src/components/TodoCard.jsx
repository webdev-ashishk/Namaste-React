function TodoCard({ todo }) {
  // const { id, title } = todoData;
  // console.log(todo[3].completed); // true

  console.log(todo);
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        border: "2px solid back",
      }}
    >
      <div
        style={{
          backgroundColor: "darkgray",
          border: "2px solid red",
        }}
      >
        <h1>todo id {todo.id}</h1>
        <h1>todo title {todo.title}</h1>
      </div>
    </div>
  );
}

// creating Hoc function
export const withCompletedTodo = (TodoCard) => {
  return (props) => {
    return (
      <div>
        <label style={{ color: "red", backgroundColor: "black" }}>
          completed label
        </label>
        <TodoCard {...props} />
      </div>
    );
  };
};

export default TodoCard;
