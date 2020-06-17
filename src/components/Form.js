import React from "react";

 function Form (props) {
    return (
      <div className="form-input">
          <p>Untitled Request</p>
          <input
            type="text"
            value={props.query}
            onChange={props.handleUrl}
          />
          <div>
          <select onChange={props.onMethodHandler}>
            <option value='get'>GET</option>
            <option value='post'>POST</option>
            <option value='put'>PUT</option>
            <option value='delete'>DELETE</option>
          </select>
          <button onClick={props.submitHandler}>Submit</button>
        </div>
      </div>
    );
  }

  export default Form;