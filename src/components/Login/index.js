import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, RaisedButton, TextField } from "material-ui";
import { Container, Row, Col } from "react-grid-system";
import "./index.css";

class Login extends Component {
  componentWillReceiveProps(props) {
    console.log("props==", props);
  }
  render() {
    return (
      <div className="login_container">
        <Card>
          <Container>
            <Row>
              <Col sm={5} className="p-zero">
                <img
                  className="full-width full-height"
                  src="http://images.fanpop.com/images/soapbox/star-wars_17_top.jpg?cache=0"
                />
              </Col>
              <Col sm={7}>
                <h2>Login</h2>
                {this.props.err.map((er, i) => {
                  return (
                    <p style={{ color: "red" }} key={i}>
                      {er}
                    </p>
                  );
                })}
                <TextField
                  className="full-width"
                  value={this.props.email}
                  floatingLabelText="Email"
                  onChange={this.props.handleChange("email")}
                />
                <TextField
                  className="full-width"
                  value={this.props.password}
                  floatingLabelText="Password"
                  onChange={this.props.handleChange("password")}
                />
                <Row>
                  <Col className="text-center">
                    <RaisedButton
                      primary={true}
                      label="Login"
                      style={{ marginTop: 15 }}
                      onClick={this.props.submit}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  err: PropTypes.array.isRequired
};

export default Login;
