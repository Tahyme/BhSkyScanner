import React from 'react';
import './App.css';
import { Menu } from "./component/Menu";
import { Outlet } from "react-router-dom";

if (localStorage.getItem("fav") === null || localStorage.getItem("fav") === undefined) {
    localStorage.setItem("fav", JSON.stringify({}));
}

const App = () => (
    
    <div className="App">
        <div className= "HeaderB">
        <Menu items={[
            { label: "Recherche de vols", to: '/' },
            { label: "Recherche d'aéroports", to: '/airports' },
            { label: "Favoris", to: "/fav" }
        ]} />
        <Outlet />
        </div>
    </div>
);

export default App;
