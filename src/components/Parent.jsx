import Child from "./Child";

const Parent = () => {
  const acceptChildData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <p>parent</p>
      <Child alert={acceptChildData} />
    </div>
  );
};
export default Parent;
