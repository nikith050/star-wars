import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import { TextField } from "material-ui";
import ListItem from "../../components/ListItem";
import * as Api from "../../services/api";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTxt: "",
      items: []
    };
  }

  handleChange = e => {
    this.setState({ searchTxt: e.target.value });
    Api.getData("planets")
      .then(this.checkStatus)
      .then(response => {
        console.log("response====", response);
        this.setState({ items: response.results });
      })
      .catch(err => {
        console.log("request failed", err);
      });
  };

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

  render() {
    return (
      <div className="login_container">
        <h1>Home</h1>
        <TextField
          className="full-width"
          value={this.props.searchTxt}
          floatingLabelText="Search here.."
          onChange={this.handleChange}
        />
        <ListItem items={this.state.items} />
      </div>
    );
  }
}

export default Home;
