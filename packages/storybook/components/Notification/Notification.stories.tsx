import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Notification  from './Notification'
import { Ionicons,Feather,MaterialIcons } from '@expo/vector-icons';
import {Text, View,Button,TextInput} from  'react-native'

const NotificationMeta: ComponentMeta<typeof Notification> = {
    title: 'Notification Component',
    component: Notification,
    argTypes:{

    },
    args: {

        backgroundColor : "white",
        icon :  <Feather name="align-center" size={24} color="black" onclick/> , 
        shadowOffset: { width: 0.2, height: 0.2},
        elevation:0.1,
        shadowColor :'grey',
        width:50,
        height:50,
        iconn : <Ionicons name="ios-notifications-sharp" size={24} color="red" />,
        onClickButton : ()=> {console.log("Onclick")}
    }
}
export default NotificationMeta;

type NotificationStory = ComponentStory<typeof Notification>
export const Basic : NotificationStory = (args) => <Notification {...args} />
export const Story2: NotificationStory = (args) => <Notification {...args} />
export const Story3 : NotificationStory = (args) => <Notification {...args} />
Story2.args = {
    ...Basic.args,
    backgroundColor : "white",
    shadowColor :'white',
   icon:<Feather name="align-justify" size={24} color="black" />,
    iconn:<MaterialIcons name="notifications-none" size={24} color="black" />
       
  }
  Story3.args = {
    ...Basic.args,
     shadowColor :'white',
     icon:<Feather name="align-left" size={24} color="black" /> ,
     iconn: <Ionicons name="notifications-outline" size={24} color="black" onclick />,
   
    
  }