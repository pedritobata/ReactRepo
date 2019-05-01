import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importo mi componente Person
import Person from './Person/Person';

class App extends Component{

  //Los componentes definidos como clases me permiten usar estado
  //state es un palabra reservada
  state = {
    persons: [
      {name:'Pedrito',age:43},
      {name:'Nandinho',age:23},
      {name:'Peluche',age:33}
    ],
    anotherAttribute: "Who cares"
  };

  switchNameHandler = () => {
    //console.log('Was clicked!');
    //para cambiar el objeto state NO funciona esto : this.state.persons[0].name = "Pefedro"
    //NO se puede acceder al objeto state directamente. para eso hay un metodo setter
    //solo se actualizará el o los atributos que se definan acá, en este caso persons
    //el atributo anotherAttribute queda como estaba.
    //El problema aquí es que tengo que replicar tooooooodo el arreglo y cambiar lo que necesito!!
    this.setState({
      persons:[
        {name:'Perico',age:40},
        {name:'Nandinho',age:23},
        {name:'Peluche',age:33}
      ]
    });

// A partir de React 16.8 se puede usar React hooks para manejar el estado en componentes funcionales
// O sea los componentes creados como funciones y no como clases
//Con esto puedo manejar los estados mucho mejor

  };


  render() {
 
    //Al final cuando se compile todo, React usará el metodo createElement para
    //traducir el html que colocamos a js
    //Esta es solo una prueba de cómo funciona , en este caso creando un simple h2
    //createElement es como un traductor de jsx a html...creo
    const renderizarAlgo = React.createElement('div',null, React.createElement('h2',{'className':'App'},'Hola mundo!!'));
  
    return (
      //Solo se puede retornar un solo elemento , en este caso este primer div
      //todo lo que quiera agregar debe estar dentro de este div
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  
        {/* Esta es la forma de comentar código en jsx !! */}
        <div>
          <h1>Mi primera App con React</h1>
        </div>
  
        {/* utilizamos la variable que creamos al comienzo para renderizar un contenido */}
        {renderizarAlgo}

        <button onClick={this.switchNameHandler}>Switch names</button>
  
        {/** Uso mi componente Person */} 
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
           <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
  
      </div>
    );
  }
}



export default App;
