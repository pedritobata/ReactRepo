
/**  OJO : ESTA CLASE ES LA TRANSFORMACION DE App-antiguo.js PARA QUE AHORA SEA UN COMPONENTE 
 *   FUNCIONAL , ES DECIR DEFINIDO COMO FUNCION Y NO COMO CLASE. Y ASÍ PODER USAR REACT HOOKS!!!
 */

 //useState es uno de los hooks mas importantes de React. todos empiezan con el prefijo "hooks"
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//importo mi componente Person
import Person from './Person/Person';

const App =  props => {

    //useState retorna un arreglo con SOLO 2 ELEMENTOS
    //el primer elemento es el estado actual
    //El segundo elemento del arreglo es una callback que me permitirá cambiar el estado
    //y que react lo reconozca
   const [personsState, setPersonsState ] =  useState({
        persons: [
          {name:'Pedrito',age:43},
          {name:'Nandinho',age:23},
          {name:'Peluche',age:33}
        ],
        anotherAttribute: "Who cares",
       
    });

     //Puedo hacer mas llamadas a useState para agregar mas atributos
     const [otherState, setOtherState] = useState('Otro atributo mas');
     console.log(personsState,'y',otherState);

     const[togglePersons, togglePersonsState] = useState({
      showPersons : false
     });

    const switchNameHandler = (newName) => {
        //OJO - Guardia !!  Este metodo chancará el estado actual con el nuevo que le estoy pasando
        //Osea no hace un merge. es decir, se volará otros atributos que no le haya pasado. Para este caso,
        //se vuela el atributo anotherAttribute porque simplemente no se lo pasé como actualizacion en este metodo
        setPersonsState({
          persons:[
            {name: newName,age:40},
            {name:'Nandinho',age:23},
            {name:'Peluche',age:33}
          ]
          //Con esto evitaría que se elimine el atributo otherAttribute
          //, anotherAttribute = personsState.anotherAttribute

          //Pero lo mas elegante es hacer mas llamadas a useState (mirar mas arriba) y agregar ahi los nuevos atributos que
          //no serán afectados por la actualizacion de persons!!
          //ya que setPersonsState solo lo deefiní para los atributos persons y anotherAttribute
          //en este caso , se volará anotherAttribute, pero "Otro atributo mas" QUEDARÁ
        });

      };


     const nameChangedHandler = (event) => {
        setPersonsState({
          persons:[
            {name: 'Pedrazo',age:40},
            {name: event.target.value,age:23},
            {name:'Peluche',age:33}
          ]
        });
      };

  

  const renderizarAlgo = React.createElement('div',null, React.createElement('h2',{'className':'App'},'Hola mundo!!'));

  const style = {
    backgroundColor : "white",
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  //Este metodo lo defino con arrow porque si usara la palabra this adentro
  //y este this hará referencia siempre a esta clase App
  //Si declaro el metodo como function , el this haría referencia al DOM ya que
  //el metodo lo estoy pasando al DOM a traves de mi componente Person
  const togglePersonsHandler = () => {
     const doesShow  = togglePersons.showPersons;
     togglePersonsState({showPersons : !doesShow});
  }

  //Lógica alternativa para pintar la sección de Persons
  //Esta logica la haría dentro del metodo render() si estuviera usando componentes
  //definidos como clases
  let personsConditional = null;
  if(togglePersons.showPersons){
    personsConditional = (
      <div>
          {/** Uso mi componente Person */} 
             <Person 
             click={() => switchNameHandler('Guarda ahi')}
             name={personsState.persons[0].name} 
             age={personsState.persons[0].age}/>
             <Person 
             changed={nameChangedHandler}
             name={personsState.persons[1].name} 
             age={personsState.persons[1].age}/>
             <Person 
             name={personsState.persons[2].name} 
             age={personsState.persons[2].age}/>
        </div>
    );
  }


  return (
 
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

        {/*bind me devuelve una nueva funcion igual a la que lo invoca ,pero le puedo 
        pasar argumentos dentro de esa nueva funcion*/}
        <button  style={style}
        onClick={switchNameHandler.bind(this,'Periquito')}>Switch names</button>

        <button style={style} onClick={togglePersonsHandler}>Toggle Names</button>
        {/** Este div lo puedo afectar por un condicional 
        para eso uso javascript simple pero dentro de llaves*/}
        {  togglePersons.showPersons ? 
        <div>
          {/** Uso mi componente Person */} 
             <Person //puedo pasar como parametros o props tambien un metodo
             //en vez de usar bind puedo hacerlo con arrow function
             //Con arrow puedo pasar la funcion invocada con los parentesis y esta solo se 
             //ejecutará cuando se haga el evento click en la vista
             //lo unico malo de esta forma es que puede ser ineficiente
             click={() => switchNameHandler('Guarda ahi')}
             name={personsState.persons[0].name} 
             age={personsState.persons[0].age}/>
             <Person 
             changed={nameChangedHandler}
             name={personsState.persons[1].name} 
             age={personsState.persons[1].age}/>
             <Person 
             name={personsState.persons[2].name} 
             age={personsState.persons[2].age}/>
        </div>
           : null  // null no devuelve nada a la vista 
        }

        {/** Otra forma de pintar algo según una condición
           arriba defino una variable para la sección que quiero validar y
            hago la lógica allí */}
        {personsConditional}
  
      </div>
    );
  
 
};





export default App;
