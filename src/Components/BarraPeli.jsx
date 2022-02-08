import React from 'react';
import '../css/BarraPeli.css'
export default function BarraPeli(params) {
  return <div className='Peli-Cont' style={{ backgroundImage: `url(${params.img})` }}>
       {/* Este componente debe ser clickeable y que redireccione a detalles de la peli */}
      <h3 className='Peli-Title'>{params.titulo}</h3>
      <span className='Peli-Description'>
          {params.descripcion}
      </span>
  </div>;
}
