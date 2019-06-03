
/**  OJO : ESTA CLASE ES el clon , continucacion y variación de App2.js
 */

 //useState es uno de los hooks mas importantes de React. todos empiezan con el prefijo "hooks"
 import React, { useState } from 'react';
 import logo from './logo.svg';
 import './App.css';
 
 //importo mi componente Person
 import Person from './Person/PersonWithRadium';

 import {StyleRoot} from 'radium';
 
 const App =  props => {
 
    const [personsState, setPersonsState ] =  useState({
         persons: [
           {id : 'asdsdfq',name:'Pedrito',age:43},
           {id : 'dfgdfb2',name:'Nandinho',age:23},
           {id : 'fbdbdf',name:'Peluche',age:33}
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
  
         setPersonsState({
           persons:[
             {name: newName,age:40},
             {name:'Nandinho',age:23},
             {name:'Peluche',age:33}
           ]

         });
 
       };
 
 
      const nameChangedHandler = (event, id) => {
        const personIndex = personsState.persons.findIndex(p => {
            return p.id === id;
        });

        //uso un clon del elemento person que obtenga del arreglo original
        //para no modificar el estado original
        const person = {
            ...personsState.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...personsState.persons];
        persons[personIndex] = person;//con esto solo actualizo el elemento person que quiero
        //y no toda la lista

         setPersonsState({
           persons:persons
         });
       };
 
   
 
   const renderizarAlgo = React.createElement('div',null, React.createElement('h2',{'className':'App'},'Hola mundo!!'));
 
   

   const togglePersonsHandler = () => {
      const doesShow  = togglePersons.showPersons;
      togglePersonsState({showPersons : !doesShow});
   };

   const deletePersonHandler = (index) => {
       //uso slice porque me devuelve un nuevo arreglo identico al original
       //y de ese modo no toco el estado original de persons
        //const persons = personsState.persons.slice();

      //tambien puedo clonar el arreglo estado de persons usando el operador spread
      const persons = [...personsState.persons];

        persons.splice(index,1);//elimino a la persona que se encuentra en el indice
        setPersonsState({persons:persons});
   };
 
   //Puedo agregar estilos como un objeto js
   //Pero no puedo agregar estilos para pseudo clases como button:hover(tambien sirve para media querys)
   //Para esto importo una librería o package usando npm. esta es : npm install --save radium
   const style = {
    backgroundColor : "green",
    color : 'white',
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
/* pseudo clases usando radium */
      ':hover' : {
        backgroundColor : "lightgreen",
        color : 'black'
      }
    };

   let personsConditional = null;
   if(togglePersons.showPersons){
     personsConditional = (
       <div>
           {/** Uso codigo javascript entre llaves */}
           {personsState.persons.map((person,index)=>{
               return <Person 
                borrar = {() => deletePersonHandler(index)}
                name = {person.name} 
                age = {person.age}
                key = {person.id} // key es una propiedad (palabra reservada) por defecto que espera React
                //Esta key se utiliza para que Rect pueda identificar qué componentes se deben
                //actualizar y cuales no, lo cual hace el render mas eficiente.
                //Key debe ser un identificador unico
                changed = {(event)=>nameChangedHandler(event,person.id)}
                />
           })}
             
         </div>
     );
            
     style.backgroundColor = 'red';
     style[':hover'] = {
      backgroundColor : "salmon",
      color : 'black'
     };

   }
 
   //creo un string que me va a permitir agregar un class para poner estilos
   //el join hace que el arreglo se vuelva un string y le pongo un espacio en medio
   //let classes = ['red' , 'bold'].join(' ');
   //así me quedaría "red bold"
   //Tambien puedo jugar con esto
   let classes = [];
   if(personsState.persons.length <= 2){
     classes.push('red');
   }
   if(personsState.persons.length <= 1){
     classes.push('bold');
   }
  


   return (
  <StyleRoot>
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

         <p className={classes.join(' ')}>This is realy working!!</p>
 
         {/*bind me devuelve una nueva funcion igual a la que lo invoca ,pero le puedo 
         pasar argumentos dentro de esa nueva funcion*/}
         
         {/* Les pongo keys a los botones porque ellos estan usando la variable style,
        la cual usa a su vez radium para las seudo clases. Key es mandatorio para que radium funcione */}
         <button  style={style}
         onClick={switchNameHandler.bind(this,'Periquito')}
         key='assss'>Switch names</button>
 
         <button style={style}  key='daddads'
           onClick={togglePersonsHandler}>Toggle Names</button>
        
        
         {/** Otra forma de pintar algo según una condición
            arriba defino una variable para la sección que quiero validar y
             hago la lógica allí */}
         {personsConditional}
         
       </div>
      </StyleRoot>
     );
   
  
 };
 
 
 
 
 //Radium actúa como wrapper (componente de orden mayor) de mi componente para inyectarle funcionalidad y sintaxis extra
 //export default Radium(App);
 export default App;
 