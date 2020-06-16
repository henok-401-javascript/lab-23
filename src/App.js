import React from 'react';
import Header from './components/Form';
import './style/style.scss';



class App extends React.Component{
  render(){
    const  test = 15;
    return (
      <div className="App">
       
         <Header henok = {test}/>
    
      </div>
    );


  }
}

export default App;
