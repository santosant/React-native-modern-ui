import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const Container = styled(Animatable.View)`
  align-items: center;
  width: 180px;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -50px;
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: 18px;
  margin-top: 24px;
`;

export const Foundation = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: 14px;
  margin-top: 24px;
`;
