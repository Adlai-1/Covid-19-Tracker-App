import React, { useState, useEffect } from 'react'
import {Text, View,FlatList,ActivityIndicator,Alert} from 'react-native'
import { request } from "graphql-request";



export default function Note(){

  const[arr,setarr] = useState([])
  const[visi,setvisi] = useState(true)
  const query = `{
    broadcastMessages{
      title
      description
      updatedAt
      _id
    }
  }`

  useEffect(()=>{
   const abortcontroll = new AbortController()
   const signal = abortcontroll.signal
    request('https://signalc.herokuapp.com/GraphQl',query,{signal: signal})
    .then((res)=>{
       setarr(res.broadcastMessages)
    })
    .catch(()=>{
      err=>console.log(err)
      Alert.alert('Network Error','Unable to Load Content.')
    })
    .finally(()=>{
      setvisi(false)
    })

    return function cleanup(){
      abortcontroll.abort()
    }
  },[]) 

    const Reportview = ({title,date,desc})=>{
        return(
          <View style={{padding:15,borderBottomWidth:1.0,borderColor:"#e3e3e3",width:"100%"}}>
           <View style={{flexDirection:"row"}}>
            <View style={{flex:1.5,alignItems:"flex-start",justifyContent:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:16}}>{title}</Text>
            </View>
            <View style={{flex:0.5,padding:5,alignItems:"flex-end",justifyContent:"center"}}>
              <Text>{date.slice(0,10)}</Text>
            </View>
           </View>
           <Text>{desc}</Text>
         </View>
        )
      }

    return(
    <View style={{flex:1,backgroundColor:"white",marginTop:60}}>
     {visi?<ActivityIndicator style={{position:"absolute",top:260,left:138}} color="blue" size={90}/>:console.log("Done!")}
     <FlatList data={arr} keyExtractor={item=>item._id} renderItem={({item})=> <Reportview title={item.title} date={item.updatedAt} desc={item.description}/>}/>
    </View>
)
}