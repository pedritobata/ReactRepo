import React from 'react';

const authContext = React.createContext({
    authenticated : false,
    login : () =>{} /** Esta funcion no hace NADA,
     en realidad solo la uso para que visual studio me dé el autocomplete del atributo login cada vez que 
     quiera acceder a los parametros del context!! */
});



export default authContext;
