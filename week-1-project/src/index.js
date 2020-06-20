import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './props';

//import { MyApp, App } from './component';
//import * as serviceWorker from './serviceWorker';
// Check the tests in ../public/index.html to see what to fix.


ReactDOM.render(

    <App title="My App" addDescription={true} articles={[{ title: 'article 1' }, { title: 'article 2' }, { title: 'article 3' }]} />
    ,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();