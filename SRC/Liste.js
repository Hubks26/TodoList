import React from "react";
import { View, Image} from "react-native";
import styled from "styled-components";


export default function Liste({ item, deleteItem }) {
  return (
    <ComponentContainer>
    <Container1>
    <TextItem>{item.value}</TextItem>
    </Container1>

    <DeleteButton

        onPress = {() => deleteItem(item.key)}
       >
          <Image source={require('../Ressource/x.png')} style={{ width: 30, height: 30, justifyContent: "center"}} />
    </DeleteButton>

  </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
    flex-direction: row;
  `;
  
  const Container1 = styled.View`
    flex-direction: row;
    border-radius: 15px;
    margin-top : 10px;
  `;
  
  const Input = styled.TextInput`
    font-size: 20px;
    background-color: "rgba(28,28,28,0.5)";
    width: 300px;
    margin-right: 20px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    margin-left: 20px;
    margin-top : 10px;
  `;
  
  const SubmitButton = styled.TouchableOpacity`
    width: 50px;
    justify-content: center;
    align-items: center;
    background-color: "rgb(28,28,28)";
    margin-bottom: 20px;
    border-radius: 50px;
    margin-top : 10px;
  `;

const TextItem = styled.Text`
    color: "rgb(200,190,0)";
    font-size: 20px;
    background-color: "rgba(28,28,28,0.5)";
    width: 300px;
    margin-right: 20px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
   margin-left: 20px;
    margin-top : 10px;
`;
const DeleteButton = styled.TouchableOpacity`
    width: 50px;
    justify-content: center;
    align-items: center;
    background-color: "rgba(28,28,28,.1)";
    margin-bottom: 20px;
    border-radius: 15px;
    margin-top : 20px;
  `;