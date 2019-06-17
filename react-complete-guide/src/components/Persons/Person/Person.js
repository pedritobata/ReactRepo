//Este es un componente custom que creamos, llamado Person
import React, {Component} from 'react';

//Importamos la libreria prop-types
//la hemos instalado con:  npm install --save prop-types
import PropTypes from 'prop-types';

import classes from './Person.module.css';

import Aux from '../../../hoc/Auxiliar';

import WithClass from '../../../hoc/WithClass';

import withClass2 from '../../../hoc/WithClass2';

import AuthContext from '../../../context/auth-context'


class Person extends Component{
//2da forma de acceder a una referencia o ref de algun elemento del html
   constructor(props){
      super(props);
      //Creo una referencia
      this.inputElementRef = React.createRef();
   }

   //Esta propiedad es reservada por React para acceder al context
   static contextType = AuthContext;

   //1ra forma de acceder a una referencia o ref de algun elemento del html. Forma antigua
     componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();

        //acá accedo al context por ejemplo
        console.log(this.context.authenticated);
     }


      render(){

         console.log('[Person.js] Person rendering...');

/*        return(
        <div className={classes.Person} >    
           <p onClick={this.props.borrar} >Bórrame!</p>
        	<p onClick={this.props.click}>I´m {this.props.name} and I´m{this.props.age} years old!</p>
            <p>{this.props.children}</p>
             <input type="text" onChange={this.props.changed}  value={this.props.name}/>
        </div>
       );  */

//Tambien puedo retornar mas de un elemento jsx (Se supone que solo se puede retornar un elemento , por
//, por ejemplo un div principal y todo lo demas adentro de él). Para hacer esto retorno un arreglo que 
//tenga por elementos a los jsx que quiera enviar separados por comas.
// De esta forma React sigue recibiendo solo un elemento que en este caso es un arreglo.
//Ojo => hay que ponerle un key a cada elemento del arreglo (cada jsx) para que no haya problemas

      /* return [
       
         <p key="assdff" onClick={this.props.borrar} >Bórrame!</p>,
         <p key="kkjfjf" onClick={this.props.click}>I´m {this.props.name} and I´m{this.props.age} years old!</p>,
          <p key="kcccxss">{this.props.children}</p>,
           <input key="ncncnc" type="text" onChange={this.props.changed}  value={this.props.name}/>
     
       ];*/

//Otra forma de enviar varios elementos es creando un hoc (high order component), el cual cumplirá la
//función de solo envolver a los elementos.
      /* return (
         <Aux>
         <p onClick={this.props.borrar} >Bórrame!</p>
         <p onClick={this.props.click}>I´m {this.props.name} and I´m{this.props.age} years old!</p>
          <p>{this.props.children}</p>
           <input type="text" onChange={this.props.changed}  value={this.props.name}/>
          </Aux>

       )*/

   //Otra forma mas de mandar varios elementos es usando fragment

       /* return (
         <React.Fragment>
         <p onClick={this.props.borrar} >Bórrame!</p>
         <p onClick={this.props.click}>I´m {this.props.name} and I´m{this.props.age} years old!</p>
          <p>{this.props.children}</p>
           <input type="text" onChange={this.props.changed}  value={this.props.name}/>
          </React.Fragment>

       )*/

       //Tal vez otra forma mas con otra hoc , pero esta vez esta hoc aunque sea espera el estilo
       //y se lo pasamos en el atributo classes
       /*return (
         <WithClass classes={classes.Person}>
         <p onClick={this.props.borrar} >Bórrame!</p>
         <p onClick={this.props.click}>I´m {this.props.name} and I´m{this.props.age} years old!</p>
          <p>{this.props.children}</p>
           <input type="text" onChange={this.props.changed}  value={this.props.name}/>
          </WithClass>

       )*/


       //Otra manera mas de usar hoc, uso el WithClass2 que en realidad me devuelve una funcion normal y 
       //NO un componente

    return (
       

    <Aux>
        {/* AuthContext.Consumer no puede recibir como child al codigo jsx directamente
        en vez de eso recibe un callback (dentro de un objeto), el cual se encargará de ejecutar tomando como
        argumento al contexto */}
       {/* <AuthContext.Consumer>
         {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
       </AuthContext.Consumer> */}

       {/**  otra forma de acceder al context usando el atributo static que definimos arriba */}
       {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}

        <p onClick={this.props.borrar} >Bórrame!</p>
        <p onClick={this.props.click}>I´m {this.props.name} and I´m{this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" 
        /** ref es una propiedad o palabra reservada especial que React puede reconocer
         * recibe un callback con un argumento que es la referencia al elemento que contenga el ref.
         * Este callback será ejecutado por React.
         * En este caso estoy creando un atributo a mi clase llamado inputElement y le asigno a él la
         * referencia al elemento html input.
         * Este aproach solo funca para class based components
        */
        /* ref={(inputEl)=>{this.inputElement = inputEl}}  */

        //2da forma: asigno la referencia que obtuve en el constructor y así
        //enlazo mi elemento input con la clase
        ref = {this.inputElementRef}
        onChange={this.props.changed} 
         value={this.props.name}/>
   </Aux>
   );

       
      }
}

//usamos Proptypes la cual agregamos como una propiedad del objeto o componente que querramos 
//Proptypes sirve para definir cuales seran los props y sus respectivos tipos de datos qua acepta mi componente.
//Con esto valido que mis componentes esten recibiendo los props y tipos correctos
//si no es así, saldrá un warning en la consola
Person.propTypes = {
   click : PropTypes.func,
   name : PropTypes.string,
   age : PropTypes.number,
   borrar : PropTypes.func,
   changed : PropTypes.func
};

export default withClass2(Person,classes.Person);