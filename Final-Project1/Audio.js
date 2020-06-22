import React, { useEffect, useState } from 'react';
import { Text, View, Modal, TouchableOpacity, FlatList, ToastAndroid,Alert,ActivityIndicator} from 'react-native';
import {  Icon, Image } from 'react-native-elements';
import { request } from "graphql-request";


export default function App() {


//States for Global Featues............
  const[cases,setcases] = useState(0)
  const[recovered,setrecov] = useState(0)
  const[deaths,setdeaths] = useState(0)
  const[conucases,setcount] = useState(0)
  const[conurecov,setcounrec] = useState(0)
  const[condeaths,setcoundeath] = useState(0)
  const[active,setactive] = useState(0)
  const[critical,setcritical] = useState(0)
  const[tests,settests] = useState(0)
  const[arr,setarr] = useState([])
  const[covid,setcovid] = useState("Ghana")
  const[flag,setflag] = useState('https://disease.sh/assets/img/flags/gh.png')
  const[visi,setvisi] = useState(true)
  
  const query =`
  {
    globalTotal{
      cases
      deaths
      recovered
      updated
    }
  }`

  const query1 = `{
    countries {
        country
        countryInfo {
            _id
            flag
        }
        
    }
}`

  const query2 = `query Country{
    country(name:"${covid}") {
        country
        countryInfo {
            _id
            flag
        }
        result {
            tests
            cases
            deaths
            recovered
            active
            critical
            updated
        }
    }
}
`

  const[modalvis,setvis]=useState(false)
  
  
  request('https://covid19-graphql.netlify.app/',query)
  .then(res=>{
    setcases(res.globalTotal.cases)
    setrecov(res.globalTotal.recovered)
    setdeaths(res.globalTotal.deaths)
  })
  .catch(err=>console.log(err))

  
  request('https://covid19-graphql.netlify.app/',query2)
  .then(res=>{
    setcritical(res.country.result.critical)
    settests(res.country.result.tests)
    setactive(res.country.result.active)
    setcount(res.country.result.cases)
    setcounrec(res.country.result.recovered)
    setcoundeath(res.country.result.deaths)
    setflag(res.country.countryInfo.flag)
  })
  .catch(err=>console.log(err))
 
  useEffect(()=>{
  const abortcontroll = new AbortController()
  const signal = abortcontroll.signal

  request('https://covid19-graphql.netlify.app/',query1)
  .then(res=>setarr(res))
  .catch(()=>{
    err=>console.log(err)
    Alert.alert("COVERS","Loaded Countries Successfully.")
  })
  .finally(()=>{
    setvisi(false)
  })

  return function cleanup(){
    abortcontroll.abort()
  }

  },[])
  
  const Listview = ({country,fla})=>{
    return(
      <View style={{flexDirection:"row",alignItems:'center',padding:8}}>
          <Image style={{width:40,height:40,borderRadius:10}} source={{uri:fla}}/>
        <View style={{flex:5,padding:6}}>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <TouchableOpacity onPress={()=>{
           setvis(!modalvis)
           setcovid(country)
           console.log(country)
           ToastAndroid.show("Fetching Data",ToastAndroid.LONG)
         }}> 
         <Text style={{fontWeight:"bold",alignSelf:"flex-start",fontSize:20}}>{country}</Text>
         </TouchableOpacity> 
         </View> 
        </View>
        </View>
    )
  }

  return (
    <View style={{flex:1,alignItems:"center",marginTop:80,backgroundColor:"white",padding:10}}>
      <View style={{backgroundColor:"white",marginTop:40,width:"100%",borderRadius:10,padding:10,elevation:20.0}}>
       <View style={{flexDirection:"row"}}>
        <View style={{flex:0.48,alignItems:"center",justifyContent:"center",padding:5}}>
          <Icon name="public" size={35} color="blue"/>
        </View>
        <View style={{flex:4,justifyContent:"center"}}>
          <Text style={{fontSize:20,marginLeft:5,fontWeight:"bold"}}>Global Stats</Text>
        </View>
       </View>
       <View style={{marginTop:15,flexDirection:"row",padding:5}}>
         <View style={{flex:1,justifyContent:"center",padding:8}}>
           <Text style={{fontSize:20,fontWeight:"700",color:"blue"}}>Cases</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{cases}</Text>
         </View>
         <View style={{flex:1,justifyContent:"center",padding:8}}>
           <Text style={{fontSize:20,fontWeight:"700",color:"green"}}>Recovery</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{recovered}</Text>
         </View>
         <View style={{flex:1,justifyContent:"center",padding:8}}>
           <Text style={{fontSize:20,fontWeight:"700",color:"red"}}>Deaths</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{deaths}</Text>
         </View>
       </View>
      </View>
      
      <View style={{ width:"100%",borderRadius:10,padding:10,marginTop:20,backgroundColor:"white",elevation:20.0}}>
       <View style={{flexDirection:"row"}}>
        <View style={{flex:0.5,alignItems:"center",justifyContent:"center",padding:5}}>
          <Image style={{width:30,height:30,borderRadius:10}} source={{uri:flag}}/>
        </View>
        <View style={{flex:4,justifyContent:"center"}}>
          <TouchableOpacity onPress={()=>setvis(!modalvis)}>
  <Text style={{fontSize:20,marginLeft:5,fontWeight:"bold"}}>{covid}</Text>
          </TouchableOpacity>
        </View>
       </View>
       {visi?<ActivityIndicator size={45} style={{position:"absolute",top:10,left:155}}/>:console.log("Done!")}
       <View style={{marginTop:15,flexDirection:"row",padding:5}}>
         <View style={{flex:1,justifyContent:"center",padding:8}}>
           <Text style={{fontSize:20,fontWeight:"700",color:"blue"}}>Cases</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{conucases}</Text>
           <Text style={{marginTop:10,fontSize:20,fontWeight:"700",color:"orange"}}>Active</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{active}</Text>
         </View>
         <View style={{flex:1,justifyContent:"center",padding:8}}>
           <Text style={{fontSize:20,fontWeight:"700",color:"green"}}>Recovery</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{conurecov}</Text>
           <Text style={{marginTop:10,fontSize:20,fontWeight:"700",color:"red"}}>Critical</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{critical}</Text>
         </View>
         <View style={{flex:1,justifyContent:"center",padding:8}}>
           <Text style={{fontSize:20,fontWeight:"700",color:"red"}}>Deaths</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{condeaths}</Text>
           <Text style={{marginTop:10,fontSize:20,fontWeight:"700",color:"indigo"}}>Test</Text>
  <Text style={{fontWeight:"bold",fontSize:18}}>{tests}</Text>
         </View>
       </View>
      </View>
      <Modal animationType="slide" visible={modalvis}>
        <TouchableOpacity onPress={()=>setvis(!modalvis)}>
        <Text style={{padding:8,fontSize:20,fontWeight:"bold"}}>Back</Text>
        </TouchableOpacity>
          <FlatList data={arr.countries}  updateCellsBatchingPeriod={5} keyExtractor={(item)=>item.countryInfo._id} renderItem={({item})=> <Listview country={item.country} fla={item.countryInfo.flag}/>}/> 
      </Modal>
    </View>
  ) 
}