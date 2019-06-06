import React from 'react';

import Person from './Person/Person';


const persons = (props) =>  //Estoy usando una forma simlificada del arrow function
    props.persons.map((person,index)=>
         
          <Person 
         borrar = {() => props.borrar(index)}
         name = {person.name} 
         age = {person.age}
         key = {person.id} // key es una propiedad (palabra reservada) por defecto que espera React
         //Esta key se utiliza para que Rect pueda identificar qué componentes se deben
         //actualizar y cuales no, lo cual hace el render mas eficiente.
         //Key debe ser un identificador unico
         changed = {(event)=> props.changed(event,person.id)}
         />
          
    
);

export default persons;