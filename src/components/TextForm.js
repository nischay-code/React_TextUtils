import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function handleUpClick() {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  function handleDownClick() {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  }
  function handleClearClick() {
    let newtext = "";
    setText(newtext);
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="10"
            style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length} Words and {text.length} Characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to Read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter Something in the Above Textbox to Preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
