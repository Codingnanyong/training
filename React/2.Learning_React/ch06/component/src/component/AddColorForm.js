import { useInput } from "react";

export default function AddColorForm({ onNewColor = (f) => f }) {
  //   const txtTitle = useRef();
  //   const hexColor = useRef();

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  // const submit = e => {return (
  //   <form onSubmit={submit}>
  //       <input ref={txtTitle} type="text" placeholder="color title..." required/>
  //       <input ref={hexColor} type="color" required/>
  //       <button>Add</button>
  //   </form>
  // )}
  const submit = (event) => {
    event.prenentDefault();
    onNewColor(titleProps.value, colorProps.color);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>Add</button>
    </form>
  );
}
