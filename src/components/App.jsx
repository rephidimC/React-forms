import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    //this event is an object that actually gets logged whenever the function gets triggered.
    setName(event.target.value);

    //console.log(event.target); this logs the field being changed and its properties.
    //console.log(event.target.value); logs what is being typed.
  }

  function handleClick() {
    setHeading(name);
    // function handleClick(event) {
    //   setHeading(name);

    //   event.preventDefault();
    //this above is what prevents the page from refreshing(default behaviour)
    // }
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        //recall there is a value identity that is in HTML, so the scope is to set the value to be equal to name.
        value={name}
      />
      <button onClick={handleClick}>Submit</button>

      {/* <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form> */}
      {/* the above is a way of implementing forms using the normal HTML forms method.
      but something has to accompany it, which would be pt inside the function the form triggers. */}
    </div>
  );
}

export default App;
