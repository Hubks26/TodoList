import React from "react";
import { View, Image} from "react-native";
import styled from "styled-components";


export default function Liste({ item, deleteItem }) {
  return (
    <ComponentContainer>
      <ListContainer>
        <View>
          <TextItem>{item.value}</TextItem>
        </View>
        <View onPress={() => deleteItem(item.key)}>
          <Image source={require('../Ressource/logo-poubelle.png')} style={{ width: 30, height: 30, marginLeft: 275}} />
        </View>
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.View`
  color: "rgb(200,190,0)";
  font-size: 15px;
  margin: 10px;
  padding: 15px 30px;
  border: 2px solid ;
  border-color:"rgb(200,190,0)";
  border-radius: 5px;
  flex-direction: row;
  width: 350px;
`;

const ComponentContainer = styled.View`
flex-direction: row;
justify-content: center;
height: auto;
width: auto;
`;

const TextItem = styled.Text`
color: "rgb(200,190,0)";
height: auto;
font-size: 15px;
`;