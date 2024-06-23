function TodoCard({ single }) {
  // const { id, title } = todoData;
  // console.log(todo[3].completed); // true

  console.log(single);
  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        border: "2px solid back",
        padding: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "darkgray",
          border: "2px solid red",
        }}
      >
        <h1>todo id {single?.id}</h1>
        <h1>todo title {single?.title}</h1>
      </div>
    </div>
  );
}

// creating Hoc function
export const withCompletedTodo = (TodoCard) => {
  return (props) => {
    return (
      <div
        style={{
          display: "relative",
        }}
      >
        <label
          style={{
            color: "red",
            backgroundColor: "black",
            display: "absolute",
            padding: "15px",
            marginTop: "20px",
            border: "2px solid blue",
            borderRadius: "10px",
            top: "40px",
            left: "50px",
          }}
        >
          completed label
        </label>
        <TodoCard {...props} />
      </div>
    );
  };
};

export default TodoCard;
