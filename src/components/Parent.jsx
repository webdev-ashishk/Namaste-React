import Child from "./Child";

const Parent = () => {
  const acceptChildData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2>Parent component</h2>
      <Child alert={acceptChildData} />
    </div>
  );
};
export default Parent;
