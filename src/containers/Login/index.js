import React, { Component } from "react";
import Login from "../../components/Login";
import * as Api from "../../services/api";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      characters: [],
      err: []
    };
  }

  componentDidMount() {
    Api.getData("people")
      .then(this.checkStatus)
      .then(response => {
        console.log("response====", response);
        this.setState({ characters: response.results });
      })
      .catch(err => {
        console.log("request failed", err);
      });
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      console.log("status: ", response.statusText);
      return response.json();
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submit = () => {
    console.log("hello");
    let userExit = false;
    this.state.characters.map(c => {
      if (c.name === this.state.email && c.birth_year === this.state.password) {
        this.props.history.push("/home");
        userExit = true;
      }
    });
    if (!userExit) {
      this.setState({ err: ["Please enter correct Email and Password."] });
    }
  };

  render() {
    return (
      <Login
        {...this.state}
        handleChange={this.handleChange}
        submit={this.submit}
      />
    );
  }
}

export default LoginContainer;
