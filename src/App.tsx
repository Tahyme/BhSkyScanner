import React, {useState, useEffect} from 'react';
import {Airport, Flight, Origin, Destination, Carrier, Legs, Price} from './interface'

function App() {
  const [airports, setAirports] = useState<Airport[]>([]);
const [flights, setflights] = useState<Flight[]>([]);
const [origins, setorigins] = useState<Origin[]>([]);
const [destinations, setdestinations] = useState<Destination[]>([]);
const [carriers, setcarriers] = useState<Carrier[]>([]);
const [prices, setPrices] = useState<Price[]>([]);
const [legs, setlegs] = useState<Legs[]>([]);
    
      useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport?query=Paris',
                {
                    headers: {
                        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                    },
                }
            );
            const data = await response.json();
            setAirports(data.data);
        }
        fetchData();
    }, []);

    return (
      <div className="App">
            <h1>Aéroports vers Paris</h1>
            <ul>
                {airports.map((airport) => (
                    <li key={airport.CityId}>{airport.CityName}</li>
                ))}
            </ul>
    </div>
  );
}

export default App;
