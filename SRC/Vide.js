import React from "react";
import { View, Image, Text } from "react-native";
import styled from "styled-components";

export default function Vide() {
  return (
    <ComponentContainer>     

<Image source={require('../Ressource/todoliste.png')} style={{ width: 500 , height: 500} }/>
    </ComponentContainer>
  );
}


const ComponentContainer = styled.View`
    flex-direction: row;
    justify-content:center;
  `;

