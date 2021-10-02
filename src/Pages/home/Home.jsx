import React, {useEffect, useState} from "react";
import "./home.css";
import codeBreaker from "../../services/codeBreaker.js"


function Home() {

useEffect(() => {
    codeBreaker(1234)
    .then(data => console.log(data)) 
},[])

  return (
    <div>
      <div className="title__container">
        <h1>CodeBreaker</h1>
      </div>
      <div className="form__container">
        <form action="">
          <label htmlFor="guess-number">Ingresa tu numero de apuesta </label>
          <input id="guess-number" type="text" />
        </form>
      </div>
      <div className="guide__container">
        <h2>Guia de juego</h2>
        <p></p>
      </div>
    </div>
  );
}

export default Home;
