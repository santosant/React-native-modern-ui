import React from "react";
import unitedImg from "../../assets/united.png";
import { Container, Image, Title, Foundation } from "./styles";

export default function Card() {
  return (
    <Container animation="slideInDown" duration={2000}>
      <Image
        source={unitedImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        iterationCount="infinite"
      />
      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}
