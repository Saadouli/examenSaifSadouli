
import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View ,Text  } from 'react-native';

const WelcomeComponent = ({navigation}) => {
    const animation = useRef(null);
    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);   
  
    return (
      <View style={styles.animationContainer}>
       <Text>web</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={()=>{ navigation.navigate("HomeScreen")}}
            />
         
            <Button
            title="Next Travel"
            onPress={()=> {navigation.navigate("HomeTravel")}}
          
          />
           
           
        
        </View>
      </View>
    );
}

export default WelcomeComponent


const styles = StyleSheet.create({       
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });





  /*
  LottieViewComponent.tsx
  import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';



/*export 
onpress=
animation
setcount(OldValue == OldValue+1);
setcount(OldValue == OldValue+1);
setcount(count+1);*/

/*export default function App() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  /*const onPressButton(
    animation
setcount(OldValue => OldValue+1);
setcount(OldValue => OldValue+1);
useEffect(() => {
    if( count === 3){
        console.log("button disabled use effect",count);
    }

0
setcount(count+1)


  )*/
/*
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/gradientBall.json')}
      />
      <text>Web</text>
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});*/