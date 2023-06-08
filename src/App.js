import React, { useState,useEffect } from "react";

function RecetaForm() {

  //objeto receta {}
  const [receta, setReceta] = useState({
    nombre: "",
    ingredientes: "",
    tiempo: "",
  });
//array recetasItems contiene todas las recetas[{}]
  const [recetasItems, setRecetasItems] = useState([]);



  const handleInputChange = (e) => {
    const {name,value} = e.target
    setReceta({...receta,[name]: value});
  };

  const handleAddReceta = (e) => {
    e.preventDefault();
    if (
      receta.nombre.trim() !== "" &&
      receta.ingredientes.trim() !== "" &&
      receta.tiempo.trim() !== ""
    ) {

      setRecetasItems([...recetasItems, receta]);
      setReceta({
        nombre: "",
        ingredientes: "",
        tiempo: "",
      });
    }
  };

  useEffect(()=>{
    let data = localStorage.getItem('lrecetas'); //lee el localstorage y lee la variable task y almacena esa variable en la variable data
    if(data){
      setRecetasItems(JSON.parse(data))
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("lrecetas",JSON.stringify(recetasItems))
  },[recetasItems]);

  return (
    <>
      <h3>Formulario de Recetas</h3>

      <label>Receta </label>
      <input
        type="text"
        name="nombre"
        value={receta.nombre}
        onChange={handleInputChange}
        placeholder="Nombre de la receta"
      />
      <br />

      <label>Ingredientes </label>
      <input
        type="textarea"
        name="ingredientes"
        value={receta.ingredientes}
        onChange={handleInputChange}
        placeholder="Lista ingredientes"
      />
      <br />

      <label>Tiempo </label>
      <input
        type="number"
        name="tiempo"
        value={receta.tiempo}
        onChange={handleInputChange}
        placeholder="Tiempo de la receta"
      />
      <br />

      <button onClick={handleAddReceta}>Agregar receta</button>

      <h2>Recetas Agregadas</h2>

      <ul>
        {recetasItems.map((rec, index) => (
          <li key={index}>
            <strong>Nombre de receta: </strong>
            {rec.nombre}
            <br />
            <strong>Ingredientes de la receta: </strong>
            {rec.ingredientes}
            <br />
            <strong>Tiempo de la receta: </strong>
            {rec.tiempo}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecetaForm;
