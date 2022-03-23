import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, BrowserRouter, Route, Routes} from "react-router-dom";
import Generated_password from "./components/Generated_password/Generated_password";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

<React.StrictMode>,
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/password" element={<Generated_password />} />
        </Routes>
        {/*<Navigation />*/}
    </Router>,
</React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
