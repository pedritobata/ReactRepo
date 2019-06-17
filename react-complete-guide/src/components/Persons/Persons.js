import React, {PureComponent} from 'react';

import Person from './Person/Person';

//PureComponent sirve para hacer la validacion de tooodos los props a ver si cambian
//y se neceistara renderizar. Es decir que PureComponent implemnta ya el metodo shouldComponentUpdate
//y ya no tenemos que hacer todas las validaciones a mano!!
class Persons extends PureComponent{  

    /*   metodos del lifecycle del update*/ 
    /* static getDerivedStateFromProps(props,state){
        console.log("[Persons.js] getDerivedStateFromProps");
        return state;
    } */

    /** Este metodo ya es obsoleto por eso me genera un warning en la consola y no se ejecuta */
    componentWillReceiveProps(props){
        console.log("[Persons.js] componentWillReceiveProps");
    }

    /* lo mismo que el metodo anterior */
    componentWillUpdate(){

    }

    //Este metodo se dispara cuando el componente está a punto de ser eliminado
    componentWillUnmount(){
        //Hacer se puede hacer un Cleanup, este metodo se presta para eso
        console.log('[Persons.js] componentWillUnmount');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("[Persons.js] shouldComponentUpdate");
        //solo quiero que se re-renderice el componente Persons cuando en realidad se modifique este 
        //componente
       /*  if(nextProps.persons !== this.props.persons){
            return true;
        }
        return false; */

        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {message: 'Snapshot!'};//lo que devuelva este metodo
        //será pasado como tercer argumento en componentDidUpdate
    }

    componentDidUpdate(prevProps,prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log("[Persons.js]", snapshot.message);
    }


    render(){
        console.log("[Persons.js] rendering...")
        
        return  this.props.persons.map((person,index)=>{
            return(
                <Person 
               borrar = {() => this.props.borrar(index)}
               name = {person.name} 
               age = {person.age}
               key = {person.id} // key es una propiedad (palabra reservada) por defecto que espera React
               //Esta key se utiliza para que Rect pueda identificar qué componentes se deben
               //actualizar y cuales no, lo cual hace el render mas eficiente.
               //Key debe ser un identificador unico
               changed = {(event)=> this.props.changed(event,person.id)}
               isAuth = {this.props.isAuthenticated}
               />
               );
             }
        );
       
    }
    
}
export default Persons;