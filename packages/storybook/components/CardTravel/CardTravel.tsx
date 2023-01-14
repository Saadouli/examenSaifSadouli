import { StyleSheet, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
type CardTravelProps ={
source: string;
title: React.ReactNode;
description?: React.ReactNode;
adress? :React.ReactNode; 
price?, 
onClick
}


  const CardTravel : React.FC<CardTravelProps> = (props) =>{   /*  pour l'impoerter de type  */
    const {source , description,adress , title,price} =props;
                  
   
return (
  
    <View style= {{ flex: 1 , width:200,justifyContent:"space-around" ,backgroundColor:"white"}}>
      <Image  style={{ height: 100,width:180, borderRadius:20}} source={{ uri:source}} />
      {title}
      {adress }
       {description}
       {price}
      </View>
      
      
   
    )
};
  export default CardTravel
const styles = StyleSheet.create({
  
})





/*import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CardTravel() {
  return (
    <View>
      <Text>CardTravel</Text>
    </View>
  )
}

const styles = StyleSheet.create({})*/