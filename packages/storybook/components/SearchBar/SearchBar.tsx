
// SearchBar.js
import React  from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
type SearchBarProps = {
  feather? :React.ReactNode; 
  input :React.ReactNode;
  
  backgroundColor:string;
  borderRadius;
  width:string;
  borderStyle;
}
const SearchBar: React.FC<SearchBarProps>  = (props) => {
  const { feather ,input,backgroundColor,borderRadius,width, borderStyle} = props;
    const [text,setText]=React.useState('');
    const [clicked, setCLicked] =React. useState(false);
    
  return (
  
     
    <View style={styles.container}>
      <View style={[styles.searchBar,{ backgroundColor,borderRadius , width ,borderStyle} ] }>
        {/* search Icon */} 
        {feather }
      { input }
     
   
      
        {/* Input field */}
       { /*<TextInput
          style={styles.input}
         
          value={text}
          onChangeText={setText}
          onFocus={() => {
            setCLicked(true);
          }}/>*/}
        
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && ( <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => { setText("") }}/>)}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
     
    </View>
    
  );
};
    
        
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  
  searchBar: {
    padding: 10,
    flexDirection: "row",
    
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

/*import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet",
  },
  text: { color: "black" },
});*/





      /*  {/* search Icon */
        {/*<Feather
          name="search"
          size={20}
          color="black"
  style={{ marginLeft: 1 }/>
    */}
      {/* Input field */}
        {/*<TextInput
          style={styles.input}
          placeholder="Search"
          value={text}
          onChangeText={setText}
          onFocus={() => {
            setCLicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {/*clicked && ( <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => { setText("") }}/>)}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}



















/*import { Button } from '@ui-kitten/components';
import React from 'react';
interface MyButtonProps {
  onPress: () => void;
  text?: string;
  bgColor?: string;
  textColor?: string;
  variant?: number;
  isDisabled?: boolean;
}

export const MyButton = ({
  onPress,
  text,
  bgColor,
  textColor,
  variant,
  isDisabled,
}: MyButtonProps) => {
  const [simpltxt, setSimpltxt] = React.useState('');
 

  return (
    <>
      <Button status="danger" onPress ={onPress}>
        Button
      </Button>
    
    </>
  );
};*/
