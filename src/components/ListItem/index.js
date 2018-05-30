import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Card, FlatButton } from "material-ui";
import { Container, Row, Col } from "react-grid-system";
// import "./index.css";

class ListItem extends Component {
  render() {
    return (
      <div className="login_container">
        <Card>
          <Container>
            {this.props.items.map((item, i) => {
              return <Item item={item} key={i} index={i} />;
            })}
          </Container>
        </Card>
      </div>
    );
  }
}

class Item extends PureComponent {
  render() {
    return (
      <Row>
        <Col className="p-zero">
          <FlatButton className="full-width" label={this.props.item.name} />
        </Col>
      </Row>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

ListItem.propTypes = {
  items: PropTypes.array.isRequired
};

export default ListItem;
