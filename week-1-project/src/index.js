import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './props';
//import { MyApp, App } from './component';
//import * as serviceWorker from './serviceWorker';
// Check the tests in ../public/index.html to see what to fix.


ReactDOM.render(

    <App title="My App" addDescription={true} />
    ,
    document.getElementById('root')
);

ReactDOM.render(

    <App title='My Other App' />
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();