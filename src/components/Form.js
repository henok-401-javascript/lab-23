import React from 'react';

class  Form extends React.Component {

eventListener(e){
      this.props.onChange( 'query',e.target.value) 
}


  render(){
    
    return(
      <div>

        <form>
        <h1>RESTy</h1>
          <label>Choose One</label>
          <input 
          type = 'text'
           value = {this.props.value} 
           onChange = {this.eventListener.bind(this)}/>

          
        <button onClick={this.props.submitHandler}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
