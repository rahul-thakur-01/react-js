import React from 'react';
import ItemList from "./Components/ItemList/ItemList.jsx";
import FilterBox from "./Components/FilterBox/FilterBox.jsx";
import SearchBox from "./Components/SearchBox/SearchBox.jsx";
import { DisplayContext } from "./contextAPI/dispalyItems.jsx";

function App() {
    return (
            <div style={{ paddingTop: '10vh' }}>
                <SearchBox />
                <div style={{ display: "flex" }}>
                    <FilterBox />
                    <ItemList />
                </div>
            </div>
    );
}

export default App;
