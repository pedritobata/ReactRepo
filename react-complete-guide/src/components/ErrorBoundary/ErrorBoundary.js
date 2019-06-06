import React, {Component} from 'react';

class ErrorBoundary extends Component{

    state = {
        hasError : false,
        errorMessage : ''
    
    }

    //este metodo es predefinido en react y se invocará cuando se produzca algun error
    //en los componentes que sean descendientes de ErrorBoundary en el html
    componentDidCatch = (error,info)=>{
        this.setState({
            hasError : true,
            errorMessage : error
        })
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children;
        }
       
    }

}

export default ErrorBoundary;