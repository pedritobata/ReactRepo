import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

//Yo agregué el atributo title para pasarselo al componente App
//Si App fuera un componente class based o dumb (no presentational),
//podría acceder a este atributo así : this.props.title
//osea que props tambien es una palabra reservada que es un atributo predefinido de
//los componentes class based!!
ReactDOM.render(<App title="Person Manager"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
