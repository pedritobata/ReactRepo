
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

 //ojo que withclass2 lo he definido como una funcion normal y no como un componente funcional
 //por eso lo declaro en minusculas
 import withclass2 from '../hoc/WithClass2';

 import Aux from '../hoc/Auxiliar';

 import AuthContext from '../context/auth-context';

 
 class App extends Component{

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
 
    state =  {
         persons: [
           {id : 'asdsdfq',name:'Pedrito',age:43},
           {id : 'dfgdfb2',name:'Nandinho',age:23},
           {id : 'fbdbdf',name:'Peluche',age:33}
         ],
         anotherAttribute: "Who cares",
         showPersons : false,
         showCockpit : true,
         changeCounter : 0,
         authenticated : false
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

        //si el mando a setState solo un objeto directamente como argumento , entonces
        //React no garantiza que el contador this.changeCounter apunte exactamente al estado anterior
        //para poder aumentarle 1 y obtener la secuencia.
        //Esto porque al parecer React encola las actualizaciones a su manera
        
        /*this.setState({
           persons:persons,
           changeCounter : this.changeCounter + 1
         });*/

        //SI le paso un callback al setState , entonces React si garantiza que el valor anterior de la variable
        //sea el correcto. Para esto se le manda el estado anteriror
        // en el primer argumento del callback. El segundo arg es el props por
        //si se necesita para algo (gracias a React!!)
        this.setState((prevState,props)=>{
          return{
            persons:persons,
            changeCounter : prevState.changeCounter + 1
          }
         
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
      //Se usa un arreglo clonado para que cuando se cambie el estado no se
      //haga la comparación de objetos por referencia sino por valor
      const persons = [...this.state.persons];

        persons.splice(index,1);//elimino a la persona que se encuentra en el indice
        this.setState({persons:persons});
   };
 
/** Algunos metodos del lyfecycle del update */
componentDidMount(){
  console.log('[App.js] componentDidMount');
}

/* shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
} */

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

//Metodo para el login
loginHandler = () => {
  this.setState({
    authenticated: true
  });
}
   

render () {
    let personsConditional = null;

 
   if(this.state.showPersons){

     personsConditional = 
       <div>
           <Persons 
              persons={this.state.persons}
              borrar={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              isAuthenticated = {this.state.authenticated}
           />   
      </div>
     ;


   }
return(
 <Aux>
   <div> {/* className={stylesCss.App}> */}
      
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
   
     <button 
     onClick={()=>{
       this.setState({showCockpit : false});
     }}>Remove Cockpit</button>

     {/** el contexto que importé debe usarse como si fuera un componente
     pero usando el objeto Provider (ya que estamos preveyendo el contexto para los componetes
    que necesito, en este caso son Cockpit y Persons)
     en el atributo value modifico en el contexto la variable que quiera actualizar y hacer disponible
     para toda la aplicacion
     OJO que el cambio del estado de las variables de contexto NO GENERA RENDER!!!*/}
     <AuthContext.Provider value={{authenticated : this.state.authenticated, 
       login: this.loginHandler}}>
     {this.state.showCockpit ? 
     <Cockpit 
       showPersons={this.state.showPersons}
       personsLength={this.state.persons.length}// truco para no enviar nada del state de persons
       //solo le envío el length que es solo un valor entero y no un estado
       //de esta forma cuando cambie el estado de las personas react no lo va a saber cuando se invoque
       //al componente Cockpit y este no hará render
       clicked={this.togglePersonsHandler}
       switch={this.switchNameHandler.bind(this,'Periquito')}
       login={this.loginHandler}
     /> : null }
   
      {personsConditional}
      </AuthContext.Provider>
      
    </div>
 </Aux>

     )
   
   }
  
 }
 
 
//Utilizo un hoc que creé 
 export default withclass2(App,stylesCss.App);
 