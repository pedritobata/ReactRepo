//Este es un componente custom que creamos, llamado Person
import React from 'react';

//Esta es una forma de crear un componente
//solo se le define como una funcion que retorna un valor (html o jsx)
const person = (props) => {
    return (
        //Aquí el comentario ya no utiliza las llaves {} porque estamos fuera del codigo jsx!!
       /** <p>I´m a person and I´m {Math.floor(Math.random() * 30)} years old!</p> */
        <div>
        	<p>I´m {props.name} and I´m {props.age} years old!</p>
            <p>{props.children}</p>{/** chidren es palabra reservada para acceder al contenido
             que esté dentro de mi componente <Person>Contenido</Person> */}
        </div>
    );
};

export default person;