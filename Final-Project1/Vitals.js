import React, { useState, useEffect } from 'react';
import {Text,View,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native';
import { Icon, Button } from "react-native-elements";
import { request } from "graphql-request";



export default function Vitals({navigation}) {
  const[arr,setarr] = useState([])
  const[visi,setvisi] = useState(true)
  const query = `{
    vitals{
      _id
      createdAt
      vitals{
        soreThroat
        shortnessOfBreath
        aches
        fever
        dryCough
        tiredness
      }
    }
  }`

  useEffect(()=>{
    const abortcontroll = new AbortController()
    const signal = abortcontroll.signal

    request('https://signalc.herokuapp.com/GraphQl',query,{signal:signal})
    .then((res)=>{
      setarr(res.vitals)
    })
    .catch((err)=>{return err})
    .finally(()=>{
      setvisi(false)
    })

    return function cleanup(){
      abortcontroll.abort()
    }

  },[])
  
  //Introductory View for Vital Screen.......
  const Prior = ()=>{
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
       <Icon name="local-hospital" size={150} color={'red'}/>
       <Text style={{fontWeight:"bold"}}>You have not logged in your vitals...</Text>
       <Button onPress={()=>{navigation.navigate('Log Symptoms')}} title="Log in your vitals" containerStyle={{marginTop:10}} buttonStyle={{borderStyle:"dashed",borderWidth:1.2}} type="outline"/>
      </View>
    )
  }

  //............Flatlist View to Display Vital Logs....
  const Flatview = ({num1,num2,num3,num4,num5,num6,date})=>{
    return(
      <View style={{width:"100%",justifyContent:"center",padding:10}}>
       <Text style={{fontWeight:"bold",marginLeft:10}}>{date.slice(0,10)}</Text>
      <View style={{flexDirection:"row",borderBottomWidth:1.0,borderRadius:50}}>
       <View style={{flex:1,padding:15,alignItems:"center",justifyContent:"center"}}>
        <View style={{width:100,height:80,backgroundColor:"teal",alignItems:"center",justifyContent:"center",borderRadius:5}}>
         <Text style={{color:"white",fontSize:15}}>Aches</Text>
         <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>{num1}</Text>
        </View>
        <View style={{width:100,height:80,backgroundColor:"blue",marginTop:10,alignItems:"center",justifyContent:"center",borderRadius:5}}>
        <Text style={{color:"white",fontSize:15}}>Dry Cough</Text>
         <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>{num2}</Text>
        </View>
       </View>
       <View style={{flex:1,padding:15,alignItems:"center",justifyContent:"center"}}>
       <View style={{width:100,height:80,backgroundColor:"red",alignItems:"center",justifyContent:"center",borderRadius:5}}>
         <Text style={{color:"white",fontSize:15}}>Short Breath</Text>
         <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>{num3}</Text>
       </View>
       <View style={{width:100,height:80,backgroundColor:"orange",marginTop:10,alignItems:"center",justifyContent:"center",borderRadius:5}}>
       <Text style={{color:"white",fontSize:15}}>Tiredness</Text>
         <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>{num4}</Text>
       </View>
       </View>
       <View style={{flex:1,padding:15,alignItems:"center",justifyContent:"center"}}>
       <View style={{width:100,height:80,backgroundColor:"blue",alignItems:"center",justifyContent:"center",borderRadius:5}}>
       <Text style={{color:"white",fontSize:15}}>Fever</Text>
         <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>{num5}</Text>
       </View>
       <View style={{width:100,height:80,backgroundColor:"purple",marginTop:10,alignItems:"center",justifyContent:"center",borderRadius:5}}>
       <Text style={{color:"white",fontSize:15}}>Sore Throat</Text>
         <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>{num6}</Text>
       </View>
       </View>
      </View>
    </View>
    )
  }
//......View for Vitals....
  const Alter = ()=>{
    return(
    <View style={{flex:1,width:"100%"}}>
     <FlatList data={arr} showsVerticalScrollIndicator={false} keyExtractor={item=>item._id} renderItem={({item})=> <Flatview date={item.createdAt} num1={item.vitals.aches} num2={item.vitals.dryCough} num3={item.vitals.shortnessOfBreath} num4={item.vitals.tiredness} num5={item.vitals.fever} num6={item.vitals.soreThroat}/> }/>
     <TouchableOpacity onPress={()=>{navigation.navigate('Log Symptoms')}} style={{width:70,borderRadius:40,height:70,alignItems:"center",justifyContent:"center",backgroundColor:"black",position:"absolute",bottom:20,right:20,elevation:6.0}}>
      <Icon name="add" color="white"/>
     </TouchableOpacity>
     </View>
    )
  }

//......Return View for the Vital Screen....
  return (
    <View style={{flex:1,alignItems:"center",backgroundColor:"white",marginTop:80,borderTopWidth:.3,borderColor:"black"}}>
      {visi?<ActivityIndicator style={{position:"absolute",top:260,left:138}} color="blue" size={90}/>:console.log("Done!")}
     <Alter/>
    </View>
  );
}
