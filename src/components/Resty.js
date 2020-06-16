//harry potter api  https://hp-api.herokuapp.com/api/characters . 

import React from 'react';
import Form from './Form.js';

class Resty extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          query: '',
          results:[],
          
        }
      }
      async onChange(key , value){
        await this.setState({...this.state , [key]:value})
      }
      submitHandler(e){
        e.preventDefault();
        console.log('button')
      }

      render(){
        return(
           <div> 
            
            <Form submitHandler={this.submitHandler}
             onChange={this.onChange.bind(this)}/>

             </div>
        )
      }
}



export default Resty;


