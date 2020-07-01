import React from "react";
import { Container } from "semantic-ui-react";

import CounterView from "./views/counter-view";

export default function App() {
  return (
    <Container>
      <h1>Client Panel</h1>
      <CounterView />
    </Container>
  );
}