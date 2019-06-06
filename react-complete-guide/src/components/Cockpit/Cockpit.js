import React from 'react';

import stylesCss from './Cockpit.module.css';


const cockpit = (props) => {

    let btnClass = '';
    if(props.showPersons){
        btnClass =  stylesCss.Red;//btnClass al final reconoce la clase "Red" (con R mayuscula) que se 
        //creó en el archivo css, así esta clase sea parte de un seudo selector , etc
        // generado por el css loader
    }
  

let classes = [];
if(props.persons.length <= 2){
  classes.push(stylesCss.red);
}
if(props.persons.length <= 1){
  classes.push(stylesCss.bold);
}

  return (
    <div className={stylesCss.Cockpit}> 
       {/* Esta es la forma de comentar código en jsx !! */}
    
       <h1>Mi primera App con React</h1>
       

     <p className={classes.join(' ')}>This is realy working!!</p>

     {/*bind me devuelve una nueva funcion igual a la que lo invoca ,pero le puedo 
     pasar argumentos dentro de esa nueva funcion*/}
     
   
     <button  /* style={style}   puedo prescindir de este estilo inline y declarar algunos
     estilos  en App.module.css para que afecten a este boton */
     onClick={props.switch}
        >Switch names</button>

     <button className={btnClass}   
     /* style={style}  */
       onClick={props.clicked}>Toggle Names</button>

    </div>
  );
};

export default cockpit;