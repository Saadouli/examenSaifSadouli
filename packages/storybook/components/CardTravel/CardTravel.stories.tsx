import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {Text, View,Button} from  'react-native'
import CardTravel  from './CardTravel'
import { AntDesign } from '@expo/vector-icons'; 
import{Ionicons} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const CardTravelMeta: ComponentMeta<typeof CardTravel> = {
    title: 'CardTravel Component',
    component: CardTravel,
    argTypes:{
           },
    args: {

    source: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/destination-update-may-2019/RA_wayagisland_indtravel.jpg",
    
    title: <View style = {{ flexDirection: "row" }}><Text>
    </Text><Text style={{ fontWeight:"bold",fontSize:13,color: 'black'}}> Raja Ampat Islands</Text><Text>{''} </Text>
    
    <Text style={{ fontSize:13,color: 'gray',fontWeight:"bold"}}> <AntDesign name="star" size={13} color="#ff4500" />
    <Text>{''} </Text> 4.8{'\n'}</Text></View>, 
  
 
    adress: <View style={{flexDirection: 'row',alignItems:'center'}}><Text >{''}</Text> <Text style={{ fontSize:10,color: 'gray'}} > 
    <Ionicons name="location-sharp" size={10} color="#ff4500"/> Raja Ampat, Paqua Barat</Text></View>,
  
    
    }
}
export default CardTravelMeta;
type CardTravelStory = ComponentStory<typeof CardTravel>
export const Basic : CardTravelStory = (args) => <CardTravel {...args} />

export const story2 : CardTravelStory = (args) => <CardTravel {...args} />
export const story3 : CardTravelStory = (args) => <CardTravel {...args} />
story2.args={
source: "https://sikidang.com/wp-content/uploads/Camp-Hulu-Cai-Resort.jpg",
title: <Text style={{ fontWeight:"bold",fontSize:20}}>  Camp Hulu Cai</Text>,
adress:<View style={{flexDirection: 'row',alignItems:'center'}}><Text >{' '} <Text> </Text>
< EvilIcons name="location" size={15} color="black" /> Cisarua, Bojor </Text></View>, 
description: <View style = {{ flexDirection: "row"}}><Text>{' '} </Text>
<Text style={{ fontWeight:"bold",fontSize:14,color: '#8fbc8f'}}> Rp 150.000/Day</Text>
<View style = {{flex:1, flexDirection: "row", width:50,backgroundColor: '#32B76C', height: 19, borderRadius:11, marginLeft: 15,marginRight:25,}} >
<Text style={{ fontSize:13,color: 'white'}}> <AntDesign name="star" size={10} color="white" /><Text>{''} </Text> 4.9</Text></View></View>, 
}
story3.args={
    ...Basic.args,
    source: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/05/The-12-Best-Markets-In-Paris-You-Have-To-Visit-2.jpg?w=1600&ssl=1",
    title: <View style = {{ flex:1,flexDirection: "row", justifyContent: 'space-between',width:235 }}>
        
        <View><Text style={{ fontWeight:"bold",fontSize:17,color: '#696969'}}> 40% OFF</Text></View>
    
    <View style = {{ flexDirection: "row",backgroundColor: 'white', height: 19, marginLeft: 1,marginRight:72,}}>
   
    <AntDesign name="star" size={12} color="#ffd700" />
    <AntDesign name="star" size={12} color="#ffd700" />
    <AntDesign name="star" size={12} color="#ffd700" />
    <FontAwesome name="star-o" size={12} color="#ffd700" /> </View> </View>, 
    adress: <Text style={{fontSize:12,color: 'gray', fontWeight:"bold"}}> 5 Days tour to Paris</Text>,
    description: <Text style={{ fontSize:12,color: 'gray'}}> $800.00</Text>, 

    }
   