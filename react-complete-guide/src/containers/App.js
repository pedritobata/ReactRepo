
/**  OJO : ESTA CLASE ES el clon , continucacion y variación de App2.js
 */

 //useState es uno de los hooks mas importantes de React. todos empiezan con el prefijo "hooks"
 import React, { Component } from 'react';
 import logo from '../logo.svg';
 import stylesCss from './App.module.css';//importo el css loader(transforma nuestro archivo css en js para usarlo)
 //para que funque le he cambiado el nombre al archivo css , agregandole .module
 
 //importo mi componente Person
 import Persons from '../components/Persons/Persons';

 import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

 import Cockpit from '../components/Cockpit/Cockpit';

 
 class App extends Component{
 
    state =  {
         persons: [
           {id : 'asdsdfq',name:'Pedrito',age:43},
           {id : 'dfgdfb2',name:'Nandinho',age:23},
           {id : 'fbdbdf',name:'Peluche',age:33}
         ],
         anotherAttribute: "Who cares",
         showPersons : false
     };
 
     
 
      switchNameHandler = (newName) => {
  
         this.setState({
           persons:[
             {name: newName,age:40},
             {name:'Nandinho',age:23},
             {name:'Peluche',age:33}
           ]

         });
 
       };
 
 
       nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //uso un clon del elemento person que obtenga del arreglo original
        //para no modificar el estado original
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;//con esto solo actualizo el elemento person que quiero
        //y no toda la lista

        this.setState({
           persons:persons
         });
       };
 
   
 
    togglePersonsHandler = () => {
      const doesShow  = this.state.showPersons;
      this.setState({showPersons : !doesShow});
   };

    deletePersonHandler = (index) => {
       //uso slice porque me devuelve un nuevo arreglo identico al original
       //y de ese modo no toco el estado original de persons
        //const persons = personsState.persons.slice();

      //tambien puedo clonar el arreglo estado de persons usando el operador spread
      const persons = [...this.state.persons];

        persons.splice(index,1);//elimino a la persona que se encuentra en el indice
        this.setState({persons:persons});
   };
 


   

render () {
    let personsConditional = null;

 
   if(this.state.showPersons){

     personsConditional = 
       <div>
           <Persons 
              persons={this.state.persons}
              borrar={this.deletePersonHandler}
              changed={this.nameChangedHandler}
           />   
      </div>
     ;


   }
return(
  <div className={stylesCss.App}>
      
         <header className={stylesCss.AppHeader}>
           <img src={logo} className={stylesCss.AppLogo} alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className={stylesCss.AppLink}
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a>
         </header>
   
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          switch={this.switchNameHandler.bind(this,'Periquito')}
        />

         {personsConditional}
         
       </div>
     )
       
    
    
   
   }

    
  
 }
 
 

 export default App;
 