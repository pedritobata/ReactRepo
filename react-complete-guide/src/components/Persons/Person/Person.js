//Este es un componente custom que creamos, llamado Person
import React from 'react';
import classes from './Person.module.css';


//Esta es una forma de crear un componente
//solo se le define como una funcion que retorna un valor (html o jsx)
const person = (props) => {

   /*  const style = {
        '@media(min-width: 500px)' :{
            width : '450px'
        }
    } */

    return  (
        //Aquí el comentario ya no utiliza las llaves {} porque estamos fuera del codigo jsx!!
       /** <p>I´m a person and I´m {Math.floor(Math.random() * 30)} years old!</p> */
     
        <div className={classes.Person} >    {/* style={style}  */}
           <p onClick={props.borrar} >Bórrame!</p>
        	<p onClick={props.click}>I´m {props.name} and I´m {props.age} years old!</p>
            <p>{props.children}</p>{/** chidren es palabra reservada para acceder al contenido
             que esté dentro de mi componente <Person>Contenido</Person> */}
             <input type="text" onChange={props.changed}  value={props.name}/>
        </div>
      
    );
};

export default person;