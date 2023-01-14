import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'
import { MyButton, UpNextButton, CardFood,Notification,ButtonImage,CardTravel} from "@my-workspace/my-ui"
import{Ionicons,Feather,EvilIcons,AntDesign } from '@expo/vector-icons';
import WelcomeComponent from '../screens/WelcomeComponent'
const HomeScreen=({navigation}) => {
    return (
        <View>
         

        <Button title="GO BACK" onPress={() => {
          navigation.goBack()
        } } />
         <Text>HomeScreen</Text>
        <CardFood
          description={<Text style={{ color: 'black' }}>test</Text>}
          price={<View style={{ flex: 1, flexDirection: 'row', height: 50 }}><Text style={{ color: 'black' }}>{' '}test{' '}</Text><Button title="+" /></View>}
          title={<Text style={{ color: 'black' }}>test</Text>} />
       
      
               <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8eApRDEdZIiTfTwjiY85OBcQwTQr2ydjLptENja7zvj2tcSsXzG0Cqq8FXqFofZeAcE&usqp=CAU"
  title={<Text style={{fontSize: 10}}>{'    '}House</Text>}
/> 
<CardTravel
  adress={<View style={{alignItems: 'center', flexDirection: 'row'}}><Text />{' '}<Text style={{color: 'gray', fontSize: 15}}>{' '}<EvilIcons color="#ff4500"  size={14}/>{' '}Raja Ampat, Paqua Barat</Text></View>}
  onClick={() => {}}
  source="https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/destination-update-may-2019/RA_wayagisland_indtravel.jpg"
  title={<View style={{flexDirection: 'row', justifyContent: 'space-around'}}><Text /><Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{' '}Raja Ampat Islands</Text><Text>{' '}</Text><Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>{' '}
  <AntDesign color="#ff4500" name="star" size={16}/><Text>{' '}</Text> 4.8 </Text></View>}/>
          </View>
         )
     }
     
export default  HomeScreen

const styles = StyleSheet.create({})