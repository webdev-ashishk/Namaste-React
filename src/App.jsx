import Product from "./components/Product";

const App = () => {
  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "gray",
          color: "white",
          height: "100px",
        }}
      >
        welcome to our store
      </h1>
      <hr />
      <Product />
    </main>
  );
};
export default App;
