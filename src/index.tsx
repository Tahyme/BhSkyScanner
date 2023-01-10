import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import AirportForm from "./form/AirportForm";
import FlightForm from "./form/FlightForm";
import DetailsFlight from "./component/DetailsFlight";
import Favoris from "./component/Favoris";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
              <Route index element={<FlightForm />} />
              <Route path="/airports" element={<AirportForm />} />
              <Route path="/details" element={<DetailsFlight />} />
              <Route path="/fav" element={<Favoris />} />
          </Route>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


