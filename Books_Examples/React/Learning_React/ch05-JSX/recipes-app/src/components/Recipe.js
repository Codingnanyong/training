import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

export default function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCae().replace(/ /g, "")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      {/* <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.name}</li>
        ))} 
      </ul>  --> IngredientsList 대체 */}
      {/* <section className="instructions">
        <h2>Cooking</h2>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section> --> Instructions 대체*/}
      <Instructions title="Cooking Order" steps={steps} />
    </section>
  );
}
