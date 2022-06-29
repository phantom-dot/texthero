import React, { useState } from "react";

export default function Textform() {
  const Uppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const Lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter The Text You Want To Change 👇");

  return (
    <div>
      <h1>Enter Your Text</h1>

      <div class="form-group mt-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handelOnChange}
        ></textarea>
      </div>
      <button onClick={Uppercase} className="btn btn-primary mt-3">
        Change to upper case
      </button>
      <button onClick={Lowercase} className="btn btn-primary mt-3 mx-3">
        Change to Lower case
      </button>

      <div className="mt-5">
        <h3>Text Summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} chracters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
