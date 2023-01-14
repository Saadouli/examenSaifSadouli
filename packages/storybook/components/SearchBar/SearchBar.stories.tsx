
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {Text, View,Button,TextInput} from  'react-native'
import { Feather, Entypo } from "@expo/vector-icons";
import SearchBar  from './SearchBar'
const SearchBarMeta: ComponentMeta<typeof SearchBar> = {
  
    title: 'SearchBar Component',
    component: SearchBar,
    argTypes:{

    },
    args: { 
      width: "46%",
      borderStyle:"hidden",
    
      backgroundColor: "#FFFFFF",
     borderRadius : 15,
    feather: <View style = {{ marginLeft: 1 }}> <Feather name="search" size={20}  color="black" /> </View>,
   
    input:  <View  style = {{ marginLeft: 10 ,width: "90%",  }}><TextInput  placeholder="Search"/></View>   ,
}
}
export default SearchBarMeta;

type SearchBarStory = ComponentStory<typeof SearchBar>
export const Basic : SearchBarStory = (args) => <SearchBar {...args} />
export const Story2: SearchBarStory = (args) => <SearchBar {...args} />
export const Story3: SearchBarStory = (args) => <SearchBar {...args} />

Story2.args = {
  ...Basic.args,

  width: "48%",
  backgroundColor: "#F8F8FF",
 borderRadius : 50,
  feather: <View  > </View>,
   
    input:   <View style = {{ justifyContent:"space-between",flexDirection:"row" ,marginLeft: 10 ,width: "90%" }}>
      <TextInput  placeholder="find a place to stay"/><View style = {{ marginLeft: 1 }}> <Feather name="search" size={20}  color="black" /> </View></View>,
}
Story3.args = {
  ...Basic.args,
  width: "50%",
  backgroundColor: "#F8F8FF",
  borderRadius : 15,
  feather: <View style = {{ marginLeft: 1 }}> <Feather name="search" size={20}  color="black" /> </View>,
   
    input:   <View style = {{ marginLeft: 10 ,width: "90%",  }}><TextInput  placeholder=""/> </View> , 
}


















































/*import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyButton } from './Button';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
    variant: {
      options: [30, 40, 50],
      control: { type: 'radio' },
    },
    bgColor: {
      control: { type: 'select' },
      options: ['white', 'black', 'gray'],
    },
  },
  args: {
    text: 'Hello world',
    //bgColor: "#ffffff",
    textColor: 'red',
    isDisabled: true,
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => <MyButton {...args} />;
Basic.args = {
  text: 'this is nejah neji',
  bgColor: 'black',
  textColor: 'white',
};*/
