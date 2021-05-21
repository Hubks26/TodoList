import React, { useState } from "react";
import { Image} from 'react-native'
import styled from "styled-components";


export default function Adddo({ submitHandler } ) {
    const [value, setValue] = useState("");
  
    const onChangeText = (text) => {
      setValue(text);
    };
  
    return (
      <ComponentContainer>
        <InputContainer>
          <Input placeholder="Ajout d'une tache" onChangeText= 
           {onChangeText} />
        </InputContainer>
        <SubmitButton

         onPress={() => {
           setValue(submitHandler(value));
         }}
       >

          <Image source={require('../Ressource/+.png')} style={{ width: 30, height: 30 }} />
        </SubmitButton>
      </ComponentContainer>
      
    );
  };


  const ComponentContainer = styled.View`
    flex-direction: row;
  `;
  
  const InputContainer = styled.View`
    flex-direction: row;
    border-radius: 15px;
    margin-top : 10px;
  `;
  
  const Input = styled.TextInput`
    font-size: 20px;
    background-color: "rgb(28,28,28)";
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