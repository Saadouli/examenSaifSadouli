

import { StyleSheet, Text, View ,TouchableOpacity ,Image } from 'react-native'
import React from 'react'

type ImageCategoryProps = {
  source:string,
  icon: React.ReactNode,
  title:React.ReactNode,
  image,
  borderRadius?,
  onClickButton : () => void }
  const ButtonImage : React.FC<ImageCategoryProps>= (props) =>{

    const {  onClickButton,title,source,borderRadius} = props
    const OnPressButton = () => {
            onClickButton()
            
    }
  return (
    <View>
    <TouchableOpacity onPress = {OnPressButton} >
    <Image  style={[styles.image,{ borderRadius }]}  source={{ uri:source}} />
      
    </TouchableOpacity>
    {title}

</View>
    
  )
}
export default ButtonImage;
const styles = StyleSheet.create({
  
  image: {
    width: 50,
    height: 50, 
  
    justifyContent : 'center',
    alignItems : 'center',
}
})


/*import { StyleSheet, Text, View ,TouchableOpacity,Image } from 'react-native'
import React from 'react'
type ButtonImageProps = {
    source:string,
    icon: React.ReactNode,
    title:React.ReactNode,
    image,
    borderRadius?,
    onClickButton : () => void }
const ButtonImage : React.FC<ButtonImageProps>= (props) =>{

    const {  onClickButton,title,source,borderRadius} = props
    const OnPressButton = () => {
            onClickButton()
            
    }
  return (
    <View>
    <TouchableOpacity onPress = {OnPressButton} >
    <Image  style={[styles.image,{ borderRadius }]}  source={{ uri:source}} />
      
    </TouchableOpacity>
    {title}

</View>
  )}
export default Buttonn;
const styles = StyleSheet.create({
   
    image: {
        width: 50,
        height: 50, 
      
        justifyContent : 'center',
        alignItems : 'center',
    }
})*/