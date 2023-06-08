import React, { useState, useEffect } from "react";
import RecetaItem from "./components/RecetaItemComponente";
import "bootstrap/dist/css/bootstrap.min.css";

function RecetaForm() {
  const [receta, setReceta] = useState({
    nombre: "",
    ingredientes: "",
    tiempo: "",
  });
  const [recetasItems, setRecetasItems] = useState([]);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReceta({ ...receta, [name]: value });
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

  useEffect(() => {
    let data = localStorage.getItem("lrecetas");
    if (data) {
      setRecetasItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lrecetas", JSON.stringify(recetasItems));
  }, [recetasItems]);

  return (
    <div style={{ backgroundColor: "#DDF7E3" }}>
      <div className="d-flex justify-content-center">
        <div className="col-md-4">

          <h3>Formulario de Recetas</h3>

          <label>Receta </label>
          <input
            type="text"
            name="nombre"
            value={receta.nombre}
            onChange={handleInputChange}
            placeholder="Nombre de la receta"
            className="form-control"
          />
          <br />

          <label>Ingredientes </label>
          <textarea
            type="textarea"
            name="ingredientes"
            value={receta.ingredientes}
            onChange={handleInputChange}
            placeholder="Lista ingredientes"
            className="form-control"
          ></textarea>

          <br />

          <label>Tiempo </label>
          <input
            type="number"
            name="tiempo"
            value={receta.tiempo}
            onChange={handleInputChange}
            placeholder="Tiempo minutos"
            className="form-control"
          />
          <br />
        </div>
      </div>

      <div className="d-flex justify-content-center ">
        {/* Botón para agregar receta */}
        <button onClick={handleAddReceta} className="btn btn-primary col-md-4 ">
          Agregar receta
        </button>
      </div>
      <br />

      <div className="d-flex justify-content-center">
        <h2>Recetas Agregadas</h2>
      </div>

      <div className="container p-3">
        <div className="row">
          {recetasItems.map((rec, index) => (
            <RecetaItem key={index} receta={rec} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecetaForm;
