import React, { useContext } from 'react';
import { pelicontext } from "../Context/Peliculas";
import BarraPeli from '../Components/BarraPeli';

export default function Home() {
    const {Movies}= useContext(pelicontext)
  return <div>
       {Movies.map((movie) => <BarraPeli key={movie.id} titulo={movie.Titulo} descripcion={movie.descripcion} img={movie.img} /> )}
  </div>;
}
