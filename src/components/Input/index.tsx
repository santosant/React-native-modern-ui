import React from "react";

import { Container } from "./styles";
import { TextInputProps } from "react-native";

export default function Input({ ...rest }: TextInputProps) {
  return <Container {...rest} />;
}
