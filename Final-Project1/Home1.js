import React, { useState, useEffect } from 'react';
import {Text,View,ImageBackground,FlatList,StatusBar,ActivityIndicator, Alert} from 'react-native';
import { ScrollView } from 'react-native';
import { request } from "graphql-request";

const Query = `{
  country(name:"Ghana") {
    result {
        cases
        deaths
        recovered
        updated
    }
}
}`

const Lit = ({number,name})=>{
  return(
    <ImageBackground source={require('./assets/covid.jpg')} imageStyle={{width:"100%",height:"100%",borderRadius:10}} style={{width:320,height:200,marginRight:20,borderRadius:10}}>
     <View style={{padding:10}}>
      <Text style={{color:"white",fontWeight:"bold",fontSize:40,textAlign:"right"}}>{number}</Text>
      <Text style={{color:"white",fontWeight:"bold",textAlign:"right"}}>{name}</Text>
     </View>
    </ImageBackground>
  )
}


export default function Home1({navigation}) {
 
  const[cas,setcas]= useState(0)
  const[death,setdeath]= useState(0)
  const[recov,setrecov]= useState(0)
  const[date,setdate]= useState('')

  const data = [{name:"Confirmed Cases",number:cas},
  {name:"Recovered",number:recov},
  {name:"Deaths",number:death}]

  useEffect(()=>{
    request('https://covid19-graphql.netlify.app/',Query)
    .then((res)=>{
       setcas(res.country.result.cases)
       setdeath(res.country.result.deaths)
       setrecov(res.country.result.recovered)
       setdate(res.country.result.updated)
     })
    .catch(()=>{
      err=>console.log(err)
      Alert.alert("Network Issue","Unable to load Covid-19 Status")
    })
  })
 
  return (
    <View style={{flex:1,marginTop:80,backgroundColor:"white"}}>
      <StatusBar backgroundColor="black"/>
     <View style={{flex:4,alignItems:"center",justifyContent:"center",borderTopWidth:.3,borderColor:"black"}}>
      <ScrollView>
        <View style={{alignItems:"center",marginBottom:10,backgroundColor:"#eee",width:"100%"}}>
          <FlatList data={data} renderItem={({item})=> <Lit name={item.name} number={item.number}/>} horizontal={true} style={{padding:10,backgroundColor:"white"}}/>
        </View>
        <View style={{padding:10}}>
          <Text style={{fontWeight:"bold",fontSize:18}}>Ghana's Situation Update</Text>
          <Text>Last Updated : {date.slice(0,10)}</Text>
        </View>
        <View style={{marginTop:10,borderBottomWidth:1.0,borderRadius:90,borderColor:"#e3e3e3",padding:10,alignItems:"center"}}>
          <Text style={{fontWeight:"bold",fontSize:18}}>Confirmed Covid-19 cases In Ghana</Text>
          <Text style={{fontWeight:"bold",fontSize:18}}>As at 23 March 2020, 14:00 Hr         </Text>
        </View>
        <View style={{alignItems:"center",padding:10,marginLeft:20}}>
        <Text style={{marginTop:10,alignSelf:"center"}}>As of 23 March 2020, 14:00 Hr, a total of 521 suspected cases have been tested for COVID-19 by Noguchi Memorial Institute for Medical Research (NMIMR) and Kumasi Centre for Collaborative Research (KCCR).Out of the suspected, twenty-seven (27) cases including two (2) deaths have been confirmed, All the twenty-five (25) confirmed cases are receiving treatment in isolation, Among the confirmed cases, twenty (20) are of Ghanaian nationality, majority of whom returned home from affected countries, Seven (7) are of other nationals namely: Norway, Lebanon, China, France, UK.In respect of contact tracing, a total of 598 contacts have been identified and are being tracked, One (1) of the contacts developed symptoms and has been confirmed positive.Nineteen (19) people have completed the 14 days of mandatory follow up.</Text>
        </View>
      </ScrollView>
     </View>
    </View>
  );
}
