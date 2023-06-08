import React from "react";
import recipe from "../assets/img/recipe.png"
const RecetaItem = ({receta}) => {
    return (
      <div className="col-md-4">
        
        <div className="card mb-3" style={{ backgroundColor: "#F9FBE7" }}>
          <div className="card-body">
          <img src = {recipe} className="card-img-top" alt="..." />
            <h5 className="card-title">{receta.nombre}</h5>
            <p className="card-text">{receta.ingredientes}</p>
            <p className="card-text">
              <small className="text-muted">Time: {receta.tiempo}min</small>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default RecetaItem;


