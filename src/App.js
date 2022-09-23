import './App.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCard} from "./components/MenuCard";

function App() {
  return (
      <div>
        <h1>Menu</h1>
        <MenuCard product={PRODUCTS_DATA}/>
      </div>
  );
}

export default App;
