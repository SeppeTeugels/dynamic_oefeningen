import './App.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
      <>
    <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
            <Tab>Menu</Tab>
            <Tab>Pictures</Tab>
        </TabList>
        <TabPanel><MenuCardPage product={PRODUCTS_DATA}/></TabPanel>
        <TabPanel><PicturesPage/></TabPanel>
    </Tabs>
      </>
  );
}

export default App;
