import React from "react";
import styled from "styled-components";


let today = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>Votre Liste.</HeaderText>
      <HeaderList>{today}</HeaderList>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: "rgb(200,75,0)";
  margin-left: 20px;
  font-size: 20px;
`;

const HeaderList = styled.Text`
  color: "rgb(200,75,0)";
  font-family: Roboto;
  font-size: 20px;
  margin-right: 20px;
`;