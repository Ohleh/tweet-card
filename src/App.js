import React from "react";
import { Container } from "./components/Card/Card.styled";
import { MainContainer } from "./components/Card/Card.styled";
import Card from "./components/Card";

export const App = () => {
  return (
    <MainContainer>
      <Container>
        <Card></Card>
      </Container>
    </MainContainer>
  );
};
