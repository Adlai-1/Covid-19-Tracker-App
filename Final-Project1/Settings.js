import React from 'react';
import {Text,View,TouchableOpacity,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

const Flatview = ({title,desc})=>{
  return(
    <TouchableOpacity onPress={()=>{}} style={{flexDirection:"row",padding:15,borderBottomWidth:1,borderColor:"#e3e3e3"}}>
    <View style={{justifyContent:"center",flex:3,padding:10}}>
      <Text style={{fontWeight:"bold"}}>{title}</Text>
      <Text>{desc}</Text>
    </View>
    <View style={{justifyContent:"center",alignItems:"center",padding:10}}>
      <Icon name="forward"/>
    </View>
  </TouchableOpacity>
  )
}


export default function Settings({navigation}) {

  const Flatview = ({title,desc,towhere})=>{
    return(
      <TouchableOpacity onPress={()=>{navigation.navigate(towhere)}} style={{flexDirection:"row",padding:15,borderBottomWidth:1,borderColor:"#e3e3e3"}}>
      <View style={{justifyContent:"center",flex:3,padding:10}}>
        <Text style={{fontWeight:"bold"}}>{title}</Text>
        <Text>{desc}</Text>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",padding:10}}>
        <Icon name="forward"/>
      </View>
    </TouchableOpacity>
    )
  }
  
  return (
    <View style={{flex:1,backgroundColor:"white",marginTop:80,borderTopWidth:.3,borderColor:"black"}}>
     <ScrollView>
      <Flatview title="Self Assesment" desc="Ascertain your covid-19 risk using our screening tool" towhere="Assesment"/>
      <Flatview title="FAQs" desc="Get answers to Frequently Asked Questions" towhere="FAQs"/>
      <Flatview title="Personal Details" desc="View and Update your personal details" towhere="Profile"/>
      <Flatview title="COVERS Hub" desc="Know the Covid-19 Status of other Countries" towhere="Audio"/>
      <Flatview title="Privacy Policy" desc="View our privacy policy" towhere="Privacy Policy"/>
     </ScrollView>
    </View>
  );
}
