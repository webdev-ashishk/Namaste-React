export default function Child({ alert }) {
  // const data = { name: "AshishK", email: "webdev.ashishk@gmail.com" };
  // const data = [10, 20, 30, 40, 50, 60, 70];
  const data = "AshishK";
  return (
    <div>
      <h2>child component rendered!</h2>
      <button onClick={() => alert(data)}>send child data</button>
    </div>
  );
}
