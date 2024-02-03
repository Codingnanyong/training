import React from "react";
import Recipe from "./Recipe";

export default function Menu({ recipe }) {
  return (
    <article>
      <header>
        <h1>Delicious Cooking Order</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}
