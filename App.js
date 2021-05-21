import React, { useState } from "react";
import { View, StatusBar, FlatList, Text } from "react-native";
import Header from "./SRC/Header"
import Liste from "./SRC/Liste"
import Adddo from "./SRC/Adddo"
import Vide from "./SRC/Vide"
import styled from "styled-components";


export default function App() {
  const [data, setData] = useState([]);
  const deleteItem = (key) => {
   setData((prevTodo) => {
     return prevTodo.filter((todo) => todo.key != key);
   });
 };
 
 const submitHandler = (value) => {
   setData((prevTodo) =>  {
     return [
       {
         value: value,
         key: Math.random().toString(),
       },
       ...prevTodo,
     ];
   });
 };
 

  return (
       <Container1>
         <View>
           <StatusBar barStyle="light-content" 
              backgroundColor="rgb(100,35,0)" />
         </View>
 
         <View>
           <Text>
              <Adddo submitHandler={submitHandler} />
             </Text>
         </View>
           <FlatList
             data={data}
             ListHeaderComponent={() => <Header />}
             ListEmptyComponent={() => <Vide />}
             keyExtractor={(item) => item.key}
             renderItem={({ item }) => (
             <Liste item={item} deleteItem={deleteItem} />
             )}
           />
       </Container1>
       
       
     );
 }
 const Container1 = styled.View`
 background-color : "rgb(40,40,40)";
 position: absolute
 height: 100%
`;