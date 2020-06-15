import React from 'react';

class  Header extends React.Component {

constructor(props){
  super(props)
  this.state = {
      url:'',
  }
}

eventListener(e){
      this.setState({ ...this.state, inputValue : e.target.value}) 
}


  render(){
    return(
      <div>
        <h1>RESTy</h1>
        <form>
          <label>Choose One</label>
          <input type = "text" value = {this.state.inputValue} onChange = {this.eventListener.bind(this)} ></input>
        </form>
        <button>Submit</button>
      </div>
    )
  }
}

export default Header;
