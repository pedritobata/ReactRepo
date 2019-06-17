import React from 'react';

//esta hoc en vez de devolver un componente funcional directamente, exporta una funcion normal , la cual
//cuando se invoque luego, sí devolverá un componente funcional que envuelve a un componente que le pasemos
//como argumento y la aplicará un estilo que tambien le pase como argumento
const withclass2 = (WrappedComponent, className) => {
  return props => (
    <div className={className} >
        {/** aqui agrego el spread operator para que el que invoque withclass2,
          pueda pasarle los props al componente que desea envolver*/}
        <WrappedComponent {...props} />
    </div>
  );
}
 

export default withclass2;