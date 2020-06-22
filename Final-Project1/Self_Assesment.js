import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default function Assesment({navigation}) {
    return (
      <View style={{flex:1,backgroundColor:"white",marginTop:80,borderTopWidth:.3,borderColor:"black",padding:10}}>
       <Text style={{fontWeight:"bold",fontSize:20}}>Getting Started!</Text>
       <Text>This tool is intended to help you understand what to do next about COVID-19.You'll answer a few questions about your symptoms,travels,and contacts you have been with.</Text>
       <Text style={{fontWeight:"bold",fontSize:20,marginTop:10}}>Note</Text>
       <Text>Recommendations provided by this tool do not constitute medical advice and should not be used to diagnose or treat medical conditions.</Text>
       <Text style={{marginTop:10}}>Let's all look out for each other by knowing our status,trying not to infect others,and reserving care for those in need.</Text>
       <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} style={{backgroundColor:"black",padding:20,width:"100%",justifyContent:"center",alignItems:"center",marginTop:278}}>
        <Text style={{color:"white"}}>Let's get Started...</Text>
       </TouchableOpacity>
      </View>
    );
  }