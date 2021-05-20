import React from "react";
import { View, Text} from "react-native";


export default function Liste({ item, deleteItem }) {
  return (
    <View>
      <View>
        <View>
          <Text>{item.value}</Text>
        </View>
        <View onPress={() => deleteItem(item.key)}>
        </View>
      </View>
    </View>
  );
}