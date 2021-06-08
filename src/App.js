import "./App.css";
import Form from "./Components/Form";
import Cart from "./Components/Cart";
import { ItemProvider } from "./Context/ItemContext";

function App() {
  return (
    <ItemProvider>
      <div className="app">
        <Form />
        <Cart />
      </div>
    </ItemProvider>
  );
}

export default App;
