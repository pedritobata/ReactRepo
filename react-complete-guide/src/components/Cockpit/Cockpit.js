import React, {useEffect, useRef, useContext} from 'react';
//useEffect es el segundo hook mas importante!!

import stylesCss from './Cockpit.module.css';

import AuthContext from '../../context/auth-context'


const Cockpit = React.memo((props) => {
  //uso el hook para obtener referencias a elementos cuando usamos functional components
  const toggleButtonRef = useRef(null);//el argumento es un valor por defecto que queramos

  //creo una constante para usar el hook de acceder al context useContext
  const authContext = useContext(AuthContext);
  

  //useEffect se ejecuta cada vez que se haga un re-render(render en el Virtual DOM no en el DOM real)
  //este re-render puede ser causado por cualquier update o creation
  //useEffect se ejecuta después de componentDidMount o componentDidUpdate!!
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    //Si queremos que useEffect solo se dispare al momento de creacion del componente y NO en cada
    //re-render, podemos hacer lo que se dice mas abajo sobre el segundo argumento de useEffect
   
    const timer = null; /*setTimeout(()=>{
      alert('Saved data to cloud!');
    },1000);*/

    //invoco a la referencia que obtuve arriba, pero lo hago dentro del metodo useEffect
    //para que le dé tiempo primero al button a renderizarse y que la referencia no sea nula!!
    toggleButtonRef.current.click();

//si retorno un callback, este se ejecutará  antes de que se ejecute el callback principal que le pasamos
//a useEffect como argumento; Pero este callback que estamos retornando tambien se ejecutará despues de
//cada re-render del componente en el que estamos , en este caso, cada vez que se re-renderice Cockpit
return ()=>{
  clearTimeout(timer);
  console.log('[Cockpit.js] cleanup work in useEffect!!');
}


    //El segundo parametro de useEfect sirve para enviar el estado del componente
    //Si react no detecta cambios en el state, entonces no ejecutará el callback!!
    //si le mando el arreglo con alguna dependencia o state [props.persons], se ejecutará el callback cada
    //vez que este state cambie.
    //Si le mando el arreglo sin dependencias osea vacio [] , el callback no se ejecutará para ningun cambio
    //de state porque react considera que no hay state para evaluar. solo se ejecutará el callback al momento
    //de crear el componente
  }, []);



  //Se puede llamar a useEffect tantas veces como se necesite

  useEffect(()=>{
    console.log('[Cockpit.js] 2nd useEffect');
    return ()=>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect!!');
    }
    //no le mando segundo argumento a useEffect para que se ejecute siempre el callback principal
  });



    let btnClass = '';
    if(props.showPersons){
        btnClass =  stylesCss.Red;
    }
  

let classes = [];
if(props.personsLength <= 2){
  classes.push(stylesCss.red);
}
if(props.personsLength <= 1){
  classes.push(stylesCss.bold);
}

  return (
    <div className={stylesCss.Cockpit}> 
    
       <h1>Mi primera App con React</h1>
       

     <p className={classes.join(' ')}>This is realy working!!</p>

    
   
     <button  
     onClick={props.switch}
        >Switch names</button>

     <button className={btnClass}  
      ref={toggleButtonRef} 
     /* style={style}  */
       onClick={props.clicked}>Toggle Names</button>

   {/*  <AuthContext.Consumer>
      {context =>  <button onClick={context.login}>Log in</button>}
   
    </AuthContext.Consumer> */}

    {/** otra forma de usar el AuthContext .Consumer*/}
    <button onClick={authContext.login}>Log in</button>      

    </div>
  );
}
);

//memo sirve para que react guarde una copia del estado del componente y 
//verifique que al momento en que se podría disparar un re-render ,el input del componente(osea su props) no
//haya variado; si no varió, entrega al copia que tiene guardada y ya no invoca a render !!
export default React.memo(Cockpit);

//export default Cockpit;