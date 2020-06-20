//harry potter api  https://hp-api.herokuapp.com/api/characters . 

import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Form from './form/Form';
import Results from './results/Results';
import If from './If/If';
import Header from './header/header';
import History from './history/history';



class RestSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      method: 'GET',
      header: {},
      body: {},
      history:[],
      loading:false,
    };
  }
  handleUrl(e) {
   
    this.setState({ ...this.state, query: e.target.value });
  }
  onMethodHandler(e) {
    this.setState({ ...this.state, method: e.target.value });
  }
  async submitHandler(e) {

    let body = {};
    let header = {};
    let res = await fetch(this.state.query, {
      method: this.state.method,
      header: {
        Accept: 'application/json'
      }
    });
    if (res) {
      
      body = await res.json();
      for (const entry of res.headers.entries()) {
        header[entry[0]] = entry[1];
      }
    }
    this.setState({ 
      resHeaders:header, 
      resBody:body , 
      loading:false });
   
  }

  // await this.setState({
  //   history:
  // })
  render() {
    return (
      <div className="resty-body">

        <BrowserRouter>
        
          <Header/>
         <Route path='/' exact>
        <Form
          query={this.state.query}
          headers={this.state.header}
          handleUrl={this.handleUrl.bind(this)}
          onMethodHandler={this.onMethodHandler.bind(this)}
          submitHandler={this.submitHandler.bind(this)}
        />

    <If
         conditon={
           this.state.resHeaders || this.state.resBody
          }
         >
          <Results className="responseBody"
            tabWidth={3}
            header={this.state.resHeaders}
            body={this.state.resBody}
          />
      </If>

        <If conditon={this.state.loading}>
          <h3>loading...</h3>
          </If>

      {/* <Results
      headers={this.state.resHeaders}
      body={this.state.resBody}
      tabWidth={5}
      /> */}
   
        </Route> 



<Route path='/history' exact>

 <History
 history={this.state.history}
 />
</Route>



        </BrowserRouter>
      </div>
    );
  }
}
export default RestSearcher;