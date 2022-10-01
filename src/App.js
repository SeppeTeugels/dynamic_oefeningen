import './App.css';
import {CAR_DATA, CITY_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {PicturesPage} from "./pages/PicturesPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";


Number.propTypes = {numbers: PropTypes.any};

CarsPage.propTypes = {numbers: PropTypes.any};

function App() {
  return (
      <>
    <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
            <Tab>Menu</Tab>
            <Tab>Pictures</Tab>
            <Tab>Numbers</Tab>
            <Tab>Cars</Tab>
            <Tab>Persons</Tab>
        </TabList>

        <TabPanel>
            <MenuCardPage product={PRODUCTS_DATA}/>
        </TabPanel>

        <TabPanel>
            <PicturesPage/>
        </TabPanel>

        <TabPanel>
            <NumbersPage numbers={NUMBER_DATA}/>
        </TabPanel>
        <TabPanel>
            <CarsPage cars={CAR_DATA}/>
        </TabPanel>
        <TabPanel>
            <PersonsPage persons={PERSON_DATA} cities={CITY_DATA}/>
        </TabPanel>
    </Tabs>
      </>
  );
}

export default App;
