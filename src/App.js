import './App.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";

function App() {
  return (
      <>
        <MenuCardPage product={PRODUCTS_DATA}/>
          <PicturesPage/>
      </>
  );
}

export default App;
