import React from "react";

 function Form (props) {
    return (
      <div className="form-input">
        
 <header>
 <h1 >RESTy</h1>
 </header>
          <input className="input-field"
            type="text"
            value={props.query}
            onChange={props.handleUrl}
          />
          <div>
          <select className="lableButton" onChange={props.onMethodHandler}>
            <option value='get'>GET</option>
            <option value='post'>POST</option>
            <option value='put'>PUT</option>
            <option value='delete'>DELETE</option>
          </select>

          <button className="button"
          onClick={props.submitHandler}>
            Submit</button>
        </div>
      </div>
    );
  }

  export default Form;