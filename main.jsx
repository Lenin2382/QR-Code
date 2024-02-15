// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import App from './App.jsx'
// // import './index.css'
// // import { UserCard } from '../class/UserCard'
// import { QrCode } from '../class/QrCode';
// import"./QrCode.css";
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* { <App />
//     <UserCard /> } */}
//     <QrCode/>
//   </React.StrictMode>,
// );
import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import { QrCode } from '../class/QrCode';
import './QrCode.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrCode />
  </React.StrictMode>
);

