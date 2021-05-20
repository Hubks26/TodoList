import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity } from 'react-native'


export default function Adddo({ submitHandler } ) {
    const [value, setValue] = useState("");
  
    const onChangeText = (text) => {
      setValue(text);
    };
  
    return (
      <View>
        <View>
          <TextInput placeholder="Ajout d'une tache" onChangeText= 
           {onChangeText} />
        </View>
        <TouchableOpacity

         onPress={() => {
           setValue(submitHandler(value));
         }}
       >

          <Text>Ajouter</Text>
        </TouchableOpacity>
      </View>
      
    );
  }