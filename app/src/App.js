import Login from "./components/Login/Login";
import SelectProduct from "./components/SelectProduct/SelectProduct.jsx";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
function App() {
  return (
    <div className="App">
      <Login />
      <SelectProduct />
      {/* <Home /> */}
      <Product />
    </div>
  );
}

export default App;
