import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign,Ionicons,Feather } from '@expo/vector-icons';

type NotificationProps = {
    backgroundColor: string
    icon: React.ReactNode,
    iconn: React.ReactNode,
    width
    height
   
    elevation
    shadowOffset
    shadowColor 
    onClickButton : () => void 
}
const Notification: React.FC<NotificationProps>  = (props) =>{
    const { backgroundColor, icon ,iconn ,width,height ,shadowColor ,elevation,  shadowOffset} = props

  return (
    <View style={{flex:1 ,flexDirection: 'row',width:350,justifyContent:'space-between'}}>
    <TouchableOpacity style={[styles.roundButton,{backgroundColor,}]} >
        {icon}
      </TouchableOpacity>
      <TouchableOpacity style={[styles.rounddButton,{backgroundColor,elevation, shadowOffset, shadowColor ,width,height }]}>
       {iconn}
      </TouchableOpacity>
            
           
    </View>
  )
}
export default Notification;

const styles = StyleSheet.create({
    roundButton : {
        width: 50,
        height: 50, 
        borderRadius : 100, 
        justifyContent : 'center',
        alignItems : 'center'
    },
    rounddButton : {
        width: 100,
        height: 100, 
        borderRadius : 100, 
        justifyContent : 'center',
        alignItems : 'center'
    }
})