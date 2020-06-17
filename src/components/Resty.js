//harry potter api  https://hp-api.herokuapp.com/api/characters . 

import React from "react";
import Form from "./Form";
import Results from "./Results";
export default class RestSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      method: "GET",
      header: {},
      body: {}
    };
  }
  handleUrl(e) {
    this.setState({ ...this.state, query: e.target.value });
  }
  onMethodHandler(e) {
    this.setState({ ...this.state, method: e.target.value });
  }
  async submitHandler(e) {
    console.log(this.state.query);
    let body;
    let header = {};
    let res = await fetch(this.state.query, {
      method: this.state.method,
      header: {
        Accept: "application/json"
      }
    });
    if (res) {
      console.log("body", body);
      body = await res.json();
      for (const entry of res.headers.entries()) {
        header[entry[0]] = entry[1];
      }
    }
    this.setState({ header, body });
    console.log("this", body);
  }
  render() {
    return (
      <div>
        <Form
          query={this.state.query}
          handleUrl={this.handleUrl.bind(this)}
          onMethodHandler={this.onMethodHandler.bind(this)}
          submitHandler={this.submitHandler.bind(this)}
        />
        <Results
          tabWidth={3}
          header={this.state.header}
          body={this.state.body}
        />
      </div>
    );
  }
}