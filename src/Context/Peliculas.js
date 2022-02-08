import React, { useState } from 'react';
import { createContext } from 'react';

export const pelicontext = createContext();
const movie = [
  {
    id: 0,
    Titulo: "Joker",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, omnis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, tempore?",
    img: "https://www.diariodevenusville.com/wp-content/uploads/2019/09/banner-JOKER.jpg",
  }
];
export default function Peliculas({children}) {
    const [Movies,SetMovies]=useState(movie)
    console.log(Movies)
    return <pelicontext.Provider value={{Movies,SetMovies}}>
        {children}
    </pelicontext.Provider>;
}
