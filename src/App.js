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
import {EventsAndStatePage} from "./pages/EventsAndStatePage";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage";
import {InputPage} from "./pages/InputPage";
import {SearchPersonsPage} from "./pages/SearchPersonsPage";
import "./services/firebase"
import {PersonsFromDbPage} from "./pages/PersonsFromDbPage";
import {CarsFromDbPage} from "./pages/CarsFromDbPage";
import {MenuFromDbPage} from "./pages/MenuFromDbPage";

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
            <Tab>Events</Tab>
            <Tab>Favorite Number</Tab>
            <Tab>Input</Tab>
            <Tab>Search</Tab>
            <Tab>Persons@DB</Tab>
            <Tab>Cars@DB</Tab>
            <Tab>Menu@DB</Tab>
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
        <TabPanel>
            <EventsAndStatePage/>
        </TabPanel>
        <TabPanel>
            <FavoriteNumberPage numbers={NUMBER_DATA}/>
        </TabPanel>
        <TabPanel>
            <InputPage/>
        </TabPanel>
        <TabPanel>
            <SearchPersonsPage persons={PERSON_DATA}/>
        </TabPanel>
        <TabPanel>
            <PersonsFromDbPage/>
        </TabPanel>
        <TabPanel>
            <CarsFromDbPage/>
        </TabPanel>
        <TabPanel>
            <MenuFromDbPage/>
        </TabPanel>
    </Tabs>
      </>
  );
}

export default App;
