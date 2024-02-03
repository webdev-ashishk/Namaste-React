import { Provider } from "react-redux";
import Header from "./components/Header";
import Product from "./components/Product";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <main>
        <Header />
        <hr />
        <Product />
      </main>
    </Provider>
  );
};
export default App;
