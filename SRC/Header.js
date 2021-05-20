import React from "react";
import {View, Text} from 'react-native'

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <View>
      <Text>A faire.</Text>
      <Text>{today}</Text>
    </View>
  );
}