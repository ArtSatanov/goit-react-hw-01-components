import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import data from "./components/profile/assets/user.json";
import statistics from "./components/Statistics/assets/data.json"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);
