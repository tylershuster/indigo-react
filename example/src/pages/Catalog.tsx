import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {
  Box,
  Row,
  Button,
  Icon,
  Text,
} from "indigo-react";

export default class Catalog extends React.Component {
  render() {
    // let match = useRouteMatch();
    return (
      <Row flexWrap='wrap'>
        <Text>Catalog</Text>

      </Row>
    )
  }
}
