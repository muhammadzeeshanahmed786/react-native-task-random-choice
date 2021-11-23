import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet,Share } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import ShareExample from './share-button'
import Icon from 'react-native-vector-icons/Ionicons';
import AlertButton  from './share-button';
export default function Home() {
    let [firstChoice, setFirstChoice] = useState('');
    let [secondChoice, setSecondChoice] = useState('');
    let [thirdChoice, setThirdChoice] = useState('');
   
        // alert('Done');
    let AddChoice=()=>{

      
      let generateRandom=Math.ceil(Math.random()*3);
      // if(firstChoice && secondChoice && thirdChoice == ''){
      //   <AlertButton/>
      // }
      if(generateRandom===1){
        alert(`Your Selected Dish is ${firstChoice}`)
        }
        else if(generateRandom===2){
          alert(`Your Selected Dish is ${secondChoice}`)
          
          
        }
        else{
          alert(`Your Selected Dish is ${thirdChoice}`)
          
        }
        }
       





    

    
    return (
        <View style={{ flex: 1, alignItems: 'center',paddingTop:100 }}>
            {/* <Text>Zeeshan</Text> */}
<Text style={{fontSize:40,fontWeight:'bold'}}> Dish </Text>

            <TextInput
                style={styles.input}
                onChangeText={setFirstChoice}
                value={firstChoice}
                placeholder="First Choice"

            />

            <TextInput
                style={styles.input}
                onChangeText={setSecondChoice}
                value={secondChoice}
                placeholder="Second Choice"

            />

            <TextInput
                style={styles.input}
                onChangeText={setThirdChoice}
                value={thirdChoice}
                placeholder="Third Choice"

            />

            <Button onPress={AddChoice}
                icon={
                    <Icon
                        
                        size={25}
                        color="#900"
                        style={{backgroundColor:'#0E86D4'}}
                    />
                }
                title="Press Button And Check Descion"
            />

                <ShareExample/>
        </View>
    );
              }
const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 250,
        margin: 12,
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 15,
        fontSize: 20,
        color: 'black',



    },
})






const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        
        message: `Your Selected Dish is Chicken`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      {/* <Button onPress={onShare}> */}
<TouchableOpacity onPress={onShare}>
      <Icon  name="share-social-outline" style={{fontSize:50,color:'black',paddingLeft:200,paddingTop:50}}/>

  </TouchableOpacity>
      {/* </Button> */}
    </View>
  );
};
