import React, { useState, useEffect } from 'react';
import {Text,View,ImageBackground,TextInput,ToastAndroid} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {request} from 'graphql-request'
import { showMessage } from "react-native-flash-message";
import Flash from 'react-native-flash-message'



export default function Phone({navigation}) {

  const[phone,setphone] = useState('')
  const[color,setcolor] =useState('#787a79')
  const[approve,setapprove] = useState(false)

  const query = `mutation{
    loginUser(input:{phone:"0558691496"}){
      message
      success
    }
  }`

 
  const Valid = ()=>{
    if(approve){
      navigation.navigate('Verify')
    }
    else{
      ToastAndroid.show("Invalid Phone-number",ToastAndroid.LONG)
    }
  }

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ImageBackground source={require('./assets/covid.jpg')} resizeMethod="scale" resizeMode="cover" style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"white",fontSize:85,fontWeight:"bold"}}>COVERS</Text>
        <Text style={{color:"white",fontWeight:"bold"}}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
        <Text style={{color:"white"}}>Join the effort by well-meaning Africans using technology</Text>
        <Text style={{color:"white"}}>to slow down and eventually halt the spread of COVID-19</Text>
        <View style={{padding:12,marginTop:25,flexDirection:"row",marginRight:10,marginLeft:10,backgroundColor:"white"}}>
          <View style={{flex:1,justifyContent:"center"}}>
            <TextInput keyboardType="number-pad" onChangeText={(text)=>{
              if(text.length == 10){
                setphone(text)
                setcolor("green")
                setapprove(true)
                showMessage({
                  message:"COVERS",
                  description:"Use the code 12345 to Verify your Registration",
                  type:"success",
                  duration:2500
                })
              }
              else{
                setcolor("#787a79")
              }
            }}/>
          </View>
          <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
           <Text>Phone number</Text>
          </View>
        </View>
        <TouchableOpacity onPress={Valid} containerStyle={{marginTop:10,width:"95%",backgroundColor:color,alignItems:"center",justifyContent:"center",padding:16}}>
          <Text style={{fontWeight:"bold",color:"white"}}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Flash position="top"/>
    </View>
  );
}

