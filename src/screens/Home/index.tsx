import React from "react";
import { Container, Header, Content } from "./styles";
import Input from "../../components/Input";
import Card from "../../components/Card";

import converImg from "../../assets/cover.png";

export function Home() {
  return (
    <Container>
      <Header source={converImg}>
        <Input placeholder="Pesquisar..." />
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  );
}
