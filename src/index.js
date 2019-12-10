import * as serviceWorker from './serviceWorker';
import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {isError401} from "./redux/errors-handler";
import MainApp from "./App"

ReactDOM.render(
    <MainApp/>, document.getElementById('root'));

isError401();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
