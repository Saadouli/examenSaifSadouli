import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { CardTravel} from "@my-workspace/my-ui";

import{AntDesign,EvilIcons } from '@expo/vector-icons';

type Travel={
source : string,
description :  string,
title :  string,
adress :  string,


}

type TravelListProps = {
   list: Travel[]
}

const TravelList:React.FC<TravelListProps>= (props) => {
    const {list}= props ;
  return (
    <ScrollView horizontal={true} style={{width:300}}>
{list.map(travel=>{return(
  

<CardTravel
  adress={<View style={{alignItems: 'center', flexDirection: 'row'}}><Text>{'  '}<Text>{' '}</Text><EvilIcons color="black" name="location" size={15}/>{' '}{travel.adress}{' '}</Text></View>}
  description={<View style={{flexDirection: 'row', justifyContent: 'space-around'}}><Text>{'  '}</Text><Text style={{color: '#8fbc8f', fontSize: 10, fontWeight: 'bold'}}>{' '}{travel.description}</Text>
  <View style={{backgroundColor: '#32B76C', borderRadius: 11, flex: 1, flexDirection: 'row', height: 19, justifyContent: 'space-around', marginLeft: 10, marginRight: 25}}><Text style={{color: 'white', fontSize: 13}}>{' '}
  < AntDesign color="white" name="star" size={10}/><Text>{' '}</Text>{' '}4.9</Text></View></View>}
  onClick={() => {}}
  source={travel.source}
  title={<Text style={{fontSize: 15, fontWeight: 'bold'}}>{'  '}{travel.title}</Text>}/>




/*<CardTravel
description={<View style={{flexDirection: 'row',alignItems:'center'}} ><Ionicons name="location" size={20} color="#ff000"/> <Text>{travel.description}</Text></View> }
source={travel.source}
title={<View style={{flexDirection: 'row', justifyContent: 'space-around'}}><Text>{travel.title}</Text><Text>{travel.star}</Text></View>}
              />*/)
       
        
        })} 
        </ScrollView>
  )
}
export default TravelList

const styles = StyleSheet.create({})









/*export default function TravelList() {
    return (
      <View>
        <Text>TravelList</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({})*/