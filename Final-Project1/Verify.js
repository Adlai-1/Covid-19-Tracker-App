import React, { useState, useEffect } from 'react';
import {Text,View,TextInput,TouchableOpacity,ToastAndroid} from 'react-native';
import { request } from "graphql-request";

const query =`mutation{
  validateLoginUser(input:{phone:"0558691496",otp:"12345"}){
    user{
      phone
      lastName
      otherNames
    }
    mobileToken
    updatedAt
  }
}`

export default function Verify({navigation}) {
  const[token,settoken] = useState('')
  const[code,setcode] = useState('')

  useEffect(()=>{
     request('https://signalc.herokuapp.com/GraphQl',query)
     .then((res)=>{
       settoken(res.validateLoginUser.mobileToken)
     })
  })

  const message = 'You must have Entered the wrong number, Please enter your correct number.'

  const Validat = ()=>{
        if(code == "12345"){
          navigation.navigate('Notice')
        }
        else{
          ToastAndroid.show("Wrong Code Entered use the Right Code",ToastAndroid.LONG)
        }
  }

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
      <Text style={{fontWeight:"bold"}}>Verification PIN</Text>
      <Text style={{marginTop:20}}>Enter the verification code</Text>
      <Text>we just sent to you earlier.</Text>
      <TextInput onChangeText={(text)=>{setcode(text)}} style={{marginTop:30,borderBottomWidth:1.5,width:"80%",textAlign:"center"}}/>
      <TouchableOpacity style={{padding:15,width:"80%",backgroundColor:"black",justifyContent:"center",alignItems:"center",marginTop:20}} onPress={Validat}>
        <Text style={{color:"white"}}>Submit code</Text>
      </TouchableOpacity>
      <Text style={{marginTop:15}}>Have not recieved your code?</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Phone'); ToastAndroid.show(message,ToastAndroid.LONG)}} style={{marginTop:10}}>
        <Text>Resend code</Text>
      </TouchableOpacity>
    </View>
  );
}
