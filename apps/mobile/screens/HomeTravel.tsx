import { StyleSheet, Text, View,ScrollView,TextInput,Button } from 'react-native'
import { CardTravel,Notification,SearchBar,ButtonImage} from "@my-workspace/my-ui";
import React, { useState } from 'react'
import{Feather, Ionicons,EvilIcons, AntDesign, MaterialIcons} from '@expo/vector-icons';
import TravelList from '../components/TravelList';
const   HomeTravel=({navigation}) =>{
  const [listTravel] =useState([{
    //   <label>Password:</label><br></br>
       //<input type
 
/* source: "hhttps://bafageh.com/uploads/images/hotels/slider/445928_17c4366a-b26e-42ee-a2fd-67c9814a43da.jpg",
 title : "Camp Batu Gede ",
 adress : " Cisarua, Bojor",
 description : "Rp 150.000/Day",*/

 source : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbzQSHHqKborDA_FogHBZ72GGg1UEVQ3huzckbTkCEA&s.jpg",
 description : "Rp 150.000/Day",
 title : "Camp Batu Gede",
 adress : " Cisarua, Bojor",

 },
 {
 source : " https://sikidang.com/wp-content/uploads/Camp-Hulu-Cai-Resort.jpg",
 description : "Rp 150.000/Day",
 title : "Camp hulu cai",
 adress : " Cisarua, Bojor",

 },
])
return (
    <View style={{flexDirection:'column',backgroundColor:"white"}}> {/*flex parent*/}
         
         <Button  title="GO BACK" onPress={()=>{
        navigation.goBack()
      }}/>
     
      <View style={{flex:1 }}>

     {/* <Notification
  backgroundColor="white"
  elevation={0.1}
  height={50}
  icon={<Feather color="black" name="align-justify" size={24}/>}
  iconn={<MaterialIcons color="black" name="notifications-none" size={24}/>}
  onClickButton={() => {}}
  shadowColor="white"
  shadowOffset={{
    height: 0.2,
    width: 0.2
  }}
  width={50}
/>*/}

<Notification
  backgroundColor="white"
  elevation={0.1}
  height={50}
  icon={<Feather color="black" name="align-center" onclick size={24}/>}
  iconn={<Feather color="red" nom="ios-notifications-sharp" size={24}/>}
  onClickButton={() => {}}
  shadowColor="grey"
  shadowOffset={{
    height: 0.2,
    width: 0.2
  }}
  width={50}
/>
         </View> 
         <View >
          <Text style={{fontSize:45}}>Where do </Text>
          <Text style={{fontSize:45,color:"green",fontWeight:"bold"}}>you want to go? </Text>
          </View>
         
          <View style={{flex:1}}>
          
<SearchBar
  backgroundColor="#FFFFFF"
  borderRadius={15}
  borderStyle="hidden"
  feather={<View style={{marginLeft: 1}}>{' '}<Feather color="black" name="search" size={20}/>{' '}</View>}
  input={<View style={{marginLeft: 10, width: '90%'}}><TextInput placeholder="Search" /></View>}
  width="46%"
/>
       </View>

       <View >
        <Text style={{fontSize:20,fontWeight:"bold"}}> Category</Text>
       </View>
       <View >
        <Text style={{fontSize:20,fontWeight:"bold"}}> </Text>
       </View>

     <View style={{flexDirection:"row" ,justifyContent:"space-between" ,width:340}}>
      <View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8eApRDEdZIiTfTwjiY85OBcQwTQr2ydjLptENja7zvj2tcSsXzG0Cqq8FXqFofZeAcE&usqp=CAU"
  title={<Text style={{fontSize: 10}}>{'    '}House</Text>}
/> 
</View>

<View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://img.freepik.com/vecteurs-libre/composition-dessin-anime-lieu-camping-pot-lampe-tente-jaune-diner-ciel-nocturne-feu_1284-54945.jpg?w=2000"
  title={<Text style={{fontSize: 10}}>{'    '}Camp</Text>}
/>  
</View>

<View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://media.istockphoto.com/id/965682770/vector/set-of-house-flat-icons.jpg?s=612x612&w=0&k=20&c=KRSNSheEXfywBXOezLcVlYfMLsF4Wyn0GIpFz5M2Lkg="
  title={<Text style={{fontSize: 10}}>{'    '}Villa</Text>}
/> 
</View>
<View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://img.freepik.com/vecteurs-premium/fond-batiment-hotel-plat_23-2148146118.jpg?w=360"
  title={<Text style={{fontSize: 10}}>{'    '}Hotels</Text>}
/> 
</View>
</View>
<View>
        
        <Text style={{fontSize:20,fontWeight:"bold"}}>Nearby Residence</Text>
        <TravelList list={listTravel}></TravelList>
        <Text style={{fontSize:20,fontWeight:"bold"}}>TOP Place</Text>
        <TravelList list={listTravel}></TravelList>
        </View>
 

      <Text>HomeTravel</Text>
    </View>
    
  )
}

export default  HomeTravel
 
const styles = StyleSheet.create({})












































































































/*import { StyleSheet, Text, View,ScrollView,TextInput,Button } from 'react-native'
import { CardTravel,Notification,SearchBar,ButtonImage} from "@my-workspace/my-ui";
import React, { useState } from 'react'
import{Feather, Ionicons} from '@expo/vector-icons';
//import TravelList from '../components/TravelList';//
const   HomeTravel=({navigation}) =>{
   const [listTravel] =useState([{
   //   <label>Password:</label><br></br>
      //<input type

source: "https://reactnative.dev/img/tiny_logo.png",
description : "Rp 150.000/Day",
title : "Camp Batu Gede ",
adress : " Cisarua, Bojor",
star :"4.9"
},
{
source : "https://reactnative.dev/img/tiny_logo.png",
description : "Rp 150.000/Day",
title : "Camp Batu Gede ",
adress : " Cisarua, Bojor",
star :"4.9"
},
{ 
source : "https://reactnative.dev/img/tiny_logo.png",
description : "Rp 150.000/Day",
title : "Camp Batu Gede ",
adress : ' Cisarua, Bojor',
star :"4.9"
}])

return (
    <View style={{flexDirection:'column',backgroundColor:"white"}}>
         
         <Button  title="GO BACK" onPress={()=>{
        navigation.goBack()
      }}/>
     
      <View style={{flex:1 }}>
      <Notification
          backgroundColor="white"
          elevation={0.1}
          height={50}
          icon={< Feather color="black" name="align-left" size={24} />}
          iconn={<Ionicons color="black" name="notifications-outline" onclick size={24} />}
          onClickButton={() => { } }
          shadowColor="white"
          shadowOffset={{
            height: 0.2,
            width: 0.2
          }}
          width={50} />  
         </View> 
         <View >
          <Text style={{fontSize:45}}>Where do </Text>
          <Text style={{fontSize:45,color:"green",fontWeight:"bold"}}>you want to go? </Text>
          </View>
         
          <View style={{flex:1}}>
          <SearchBar
           backgroundColor="#FFFFFF"
           borderRadius={15}
           borderStyle="hidden"
           entypo={<View style={{alignItems: 'center', flexDirection: 'row'}} />}
           feather={<View style={{marginLeft: 1}}>{' '}<Feather color="black" name="search" size={20}/>{' '}</View>}
           input={<TextInput placeholder="Search" />}
           width="25%"
                       />
       </View>

       <View >
        <Text style={{fontSize:20,fontWeight:"bold"}}> Category</Text>
       </View>
       <View >
        <Text style={{fontSize:20,fontWeight:"bold"}}> </Text>
       </View>

     <View style={{flexDirection:"row" ,justifyContent:"space-between" ,width:340}}>
      <View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8eApRDEdZIiTfTwjiY85OBcQwTQr2ydjLptENja7zvj2tcSsXzG0Cqq8FXqFofZeAcE&usqp=CAU"
  title={<Text style={{fontSize: 10}}>{'    '}House</Text>}
/> 
</View>

<View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://img.freepik.com/vecteurs-libre/composition-dessin-anime-lieu-camping-pot-lampe-tente-jaune-diner-ciel-nocturne-feu_1284-54945.jpg?w=2000"
  title={<Text style={{fontSize: 10}}>{'    '}Camp</Text>}
/>  
</View>

<View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://media.istockphoto.com/id/965682770/vector/set-of-house-flat-icons.jpg?s=612x612&w=0&k=20&c=KRSNSheEXfywBXOezLcVlYfMLsF4Wyn0GIpFz5M2Lkg="
  title={<Text style={{fontSize: 10}}>{'    '}Villa</Text>}
/> 
</View>
<View>
     <ButtonImage
  borderRadius={500}
  onClickButton={() => {}}
  source="https://img.freepik.com/vecteurs-premium/fond-batiment-hotel-plat_23-2148146118.jpg?w=360"
  title={<Text style={{fontSize: 10}}>{'    '}Hotels</Text>}
/> 
</View>
</View>
 <View>
        <Text>Saif</Text>
        <Text>Title 1</Text>
        <TravelList list={listTravel}></TravelList>
        <Text>Title 2</Text>
        <TravelList list={listTravel}></TravelList>
        </View>
        <CardTravel
        description={<Text>{' '}description</Text>}
        source="https://reactnative.dev/img/tiny_logo.png"
        title={<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>{' '}<Text>title</Text>{' '}<Text>{' '}start{' '}</Text>{' '}</View>}
      />
      <Text>HomeTravel</Text>
    </View>
    
  )
}


<View>
        <Text style={{fontSize:20,fontWeight:"bold"}}> Nearby residence</Text>
        </View> 
        <ScrollView horizontal={true} style={{width:300 }}>
       <View style={{flexDirection:"row" ,justifyContent:"space-between" }} >
       <View style={{flex:1,backgroundColor:"white" }}>
        <CardTravel
  adress={<View style={{alignItems: 'center', flexDirection: 'row'}}><Text>{'  '}<Text>{' '}</Text><EvilIcons color="black" name="location" size={15}/>{' '}Cisarua, Bojor{' '}</Text></View>}
  description={<View style={{flexDirection: 'row', justifyContent: 'space-around'}}><Text>{'  '}</Text><Text style={{color: '#8fbc8f', fontSize: 14, fontWeight: 'bold'}}>{' '}Rp 150.000/Day</Text>
  <View style={{backgroundColor: '#32B76C', borderRadius: 11, flex: 1, flexDirection: 'row', height: 19, justifyContent: 'space-around', marginLeft: 10, marginRight: 25}}><Text style={{color: 'white', fontSize: 13}}>{' '}
  < AntDesign color="white" name="star" size={10}/><Text>{' '}</Text>{' '}4.9</Text></View></View>}
  onClick={() => {}}
  source="https://bafageh.com/uploads/images/hotels/slider/445928_17c4366a-b26e-42ee-a2fd-67c9814a43da.jpg"
  title={<Text style={{fontSize: 20, fontWeight: 'bold'}}>{'  '}Camp Hulu Cai</Text>}/>
           </View>
           <View style={{flex:1 ,backgroundColor:"white"}}> 
        <CardTravel
  adress={<View style={{alignItems: 'center', flexDirection: 'row'}}><Text>{'  '}<Text>{' '}</Text><EvilIcons color="black" name="location" size={15}/>{' '}Cisarua, Bojor{' '}</Text></View>}
  description={<View style={{flexDirection: 'row', justifyContent: 'space-around'}}><Text>{'  '}</Text><Text style={{color: '#8fbc8f', fontSize: 14, fontWeight: 'bold'}}>{' '}Rp 150.000/Day</Text>
  <View style={{backgroundColor: '#32B76C', borderRadius: 11, flex: 1, flexDirection: 'row', height: 19, justifyContent: 'space-around', marginLeft: 10, marginRight: 25}}><Text style={{color: 'white', fontSize: 13}}>{' '}
  < AntDesign color="white" name="star" size={10}/><Text>{' '}</Text>{' '}4.9</Text></View></View>}
  onClick={() => {}}
  source="https://sikidang.com/wp-content/uploads/Camp-Hulu-Cai-Resort.jpg"
  title={<Text style={{fontSize: 20, fontWeight: 'bold'}}>{'  '}Camp Hulu Cai</Text>}/>
  </View>
</View>
</ScrollView>
export default  HomeTravel
 
const styles = StyleSheet.create({
  })*/