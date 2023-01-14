

//import { MyButton } from "@my-workspace/my-ui";

//import CardFood from "./components/CardFood/CardFood.tsx";
import { StyleSheet } from "react-native";
//import React from "react";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import WelcomeComponent from "./screens/WelcomeComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import HomeTravel from "./screens/HomeTravel";
/*import HomeSearch from "./screens/HomeSearch";*/
import HomeFood from "./screens/HomeFood";
import React from 'react';





const App = () => {
  const Stack = createStackNavigator();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcom" component={WelcomeComponent} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HomeFood" component={HomeFood} />
          <Stack.Screen name="HomeTravel" component={HomeTravel} />
         
          
          </Stack.Navigator>
       </NavigationContainer>
     
    
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
