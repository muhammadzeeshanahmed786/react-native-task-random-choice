import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {auth, createUserWithEmailAndPassword, db, setDoc, doc} from '../config/firebase'
export default function SignUP({navigation}) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')
    let [errmasg, setErrMsg] = useState('Error')

// console.log(navigation)
const registerUser = async () => {
    try {
        console.log({ email, userRole })
        let { user } = await createUserWithEmailAndPassword(auth, email, password);
        let dataRef = doc(db, 'users', user.uid)
        await setDoc(dataRef, {
            email: user.email,
            uid: user.uid,
            // userRole: userRole
        });
        alert("User Login Successfully")

    } catch (err) {
        setErrMsg(err.message);
        setTimeout(() => {
            setErrMsg('');
        }, 5000)
    }
}


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff',paddingTop:100 }}>
            {/* <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif',
                }}
            /> */}


            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Name"

            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}

            />

        

            <TouchableOpacity onPress={registerUser}>
                <Text
                    style={styles.button}
                >
                    <Icon name="enter-outline" style={{ fontSize: 20, padding: 20 }} />

                    Sign Up
                </Text>

            </TouchableOpacity>
          
            <View style={styles.iconimage}>
                <TouchableOpacity >
                    <Icon name="logo-facebook" style={{ fontSize: 40, color: '#3b5998', padding: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon name="logo-google" style={{ fontSize: 40, color: '#E34133', padding: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon name="logo-twitter" style={{ fontSize: 40, color: '#4285F4', padding: 20 }} />
                </TouchableOpacity>
            </View>
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
        // fontWeight:'bold',
        fontSize: 20,
        color: 'black',

        // textAlign:'center'


    },

    button: {
        height: 50,
        // width:100,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 15,

        fontSize: 20,
        color: 'black',


    },
    tinyLogo: {
        width: 300,
        height: 250,
        padding: 50
    },
    iconimage: {
        flexDirection: 'row', flexWrap: 'wrap'
    }

});