import React, { memo, useState } from "react";
import "./App.css";

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
});

const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);

// Remove extra closing parenthesis
const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);

function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <div key={i}>
          <Cat name={name} />
          <RenderCatOnce
            name={name}
            meow={(name) => console.log(`${name} has meowed`)}
          />
          <AlwaysRenderCat
            name={name}
            meow={(name) => console.log(`${name} has meowed`)}
          />
          <PureCat
            key={i}
            name={name}
            meow={(name) => console.log(`${name} has meowed`)}
          />
        </div>
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a Cat")])}>
        Add a Cat
      </button>
    </>
  );
}

export default App;
