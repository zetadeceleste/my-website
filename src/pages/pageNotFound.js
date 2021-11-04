import React from 'react';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
   const history = useHistory();

   const handleClick = () => history.push('/');

   return (
      <div className="page-not-found">
         <div className="container">
            <div className="box">
               <h1>Página no encontrada</h1>
               <p>Es posible que hayas ingresado mal la ruta de acceso.</p>
               <button onClick={handleClick} className="btn">
                  Ir al Inicio
               </button>
            </div>
         </div>
      </div>
   );
};

export default PageNotFound;
