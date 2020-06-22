import React, { useState ,useEffect} from "react";
import {View,Alert,Modal,ScrollView,TouchableOpacity,FlatList,Text,TextInput,ImageBackground,Image,ActivityIndicator} from "react-native";
import { Icon } from "react-native-elements";
import { request } from "graphql-request";

const Query = `{
    countries {
        country
        countryInfo {
            _id
            flag
            iso3
        }
    }
  }
  `

export default function Profile({navigation}){
 
    const[arr,setarr]= useState([])
    const[modal,setmodal]=useState(false)
    const[modal1,setmodal1]=useState(false)
    const[flag1,setflag1]=useState('https://disease.sh/assets/img/flags/ng.png')
    const[name1,setname1]=useState('Nigeria')
    const[flag,setflag] = useState('https://disease.sh/assets/img/flags/gh.png')
    const[name,setname]=useState('Ghana')
    const[colo,setcolo] = useState('grey')
    const[colo1,setcolo1] = useState('grey')
    const[person,setperson] = useState('')
    const[visi,setvisi] = useState(true)

   //Flatlist View...
  const Modalflat = ({count,flag})=>{
  return(
    <TouchableOpacity onPress={()=>{setflag(flag),setname(count),setmodal(!modal)}} style={{flexDirection:"row",borderBottomWidth:1.0,borderRadius:90,borderColor:"#eee",marginBottom:10}}>
    <View style={{flex:0.3,padding:10,alignItems:"flex-start",justifyContent:"center"}}>
     <View style={{elevation:15,shadowColor:"black",borderRadius:10}}>
     <ImageBackground source={{uri:flag}} style={{width:40,height:40}} imageStyle={{borderRadius:10}}/>
     </View>
    </View>
    <View style={{flex:2.0,padding:10,alignItems:"flex-start",justifyContent:"center"}}>
      <View>
      <Text style={{fontSize:18}}>{count}</Text>
      </View>
    </View>
   </TouchableOpacity>
  )
}

useEffect(()=>{
const abortcontroll = new AbortController()
const signal = abortcontroll.signal

request('https://covid19-graphql.netlify.app/',Query,{signal: signal})
.then(res=>setarr(res))
.catch(()=>{
  err=>console.log(err)
  Alert.alert("Network Error","Unable to Load Content")
})
.finally(()=>{
  setvisi(false)
})

return function cleanup(){
  abortcontroll.abort()
}
},[])

const Flaggin = ()=>{
    setcolo("black")
    setcolo1("grey")
    setperson('male')
}

const Flaggin1 = ()=>{
    setcolo1("black")
    setcolo("grey")
    setperson('female')
}

console.log(person)

const Modalflat1 = ({count,flag})=>{
  return(
    <TouchableOpacity onPress={()=>{setflag1(flag),setname1(count),setmodal1(!modal1)}} style={{flexDirection:"row",borderBottomWidth:1.0,borderRadius:90,borderColor:"#eee",marginBottom:10}}>
    <View style={{flex:0.3,padding:10,alignItems:"flex-start",justifyContent:"center"}}>
     <View style={{elevation:15,shadowColor:"black",borderRadius:10}}>
     <ImageBackground source={{uri:flag}} style={{width:40,height:40}} imageStyle={{borderRadius:10}}/>
     </View>
    </View>
    <View style={{flex:2.0,padding:10,alignItems:"flex-start",justifyContent:"center"}}>
      <View>
      <Text style={{fontSize:18}}>{count}</Text>
      </View>
    </View>
   </TouchableOpacity>
  )
}

  return(    
    <View style={{flex:1,marginTop:60,backgroundColor:"white"}}>
      <ScrollView style={{padding:10}}>
        <Text>Enter Age</Text>
         <View style={{padding:8,borderWidth:1.0,marginTop:10,borderColor:"#eee"}}>
          <TextInput placeholder="eg 40"/>
          </View>
        <View style={{flexDirection:"row",marginTop:15,alignItems:"center"}}>
           <TouchableOpacity onPress={()=>{Flaggin()}} style={{flexDirection:"row",alignItems:"center"}}>
           <View style={{width:25,height:25,borderRadius:20,justifyContent:"center",alignItems:"center",backgroundColor:colo,marginRight:5}}>
           <Icon name="check" color="white" size={15}/>
           </View>
           <Text style={{marginRight:10}}>Male</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{Flaggin1()}} style={{flexDirection:"row",alignItems:"center"}}>
           <View style={{width:25,height:25,borderRadius:20,justifyContent:"center",alignItems:"center",backgroundColor:colo1,marginRight:5}}>
           <Icon name="check" color="white" size={15}/>
           </View>
           <Text style={{marginRight:10}}>Female</Text>
           </TouchableOpacity>
        </View>
     <Text style={{fontWeight:"bold",marginTop:15}}>Travel History</Text>
     {visi?<ActivityIndicator style={{position:"absolute",top:260,left:120}} color="blue" size={90}/>:console.log("Done!")}
     <Text>Select the last two countries you visited (If Applicable)</Text>
     <View style={{flexDirection:"row",marginTop:20}}>
     <View style={{flex:1,padding:10,alignItems:"center",justifyContent:"center"}}> 
        <TouchableOpacity onPress={()=>{setmodal(!modal)}} style={{borderRadius:5,width:140,height:120,padding:10,justifyContent:"center",alignItems:"center",borderWidth:1.5,borderColor:"grey"}}>
        <Image source={{uri:flag}} style={{width:50,height:50,borderRadius:10}}/>
        <Text style={{marginTop:10}}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,padding:10,alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity onPress={()=>{setmodal1(!modal1)}} style={{borderRadius:5,width:140,height:120,padding:10,justifyContent:"center",alignItems:"center",borderWidth:1.5,borderColor:"grey"}}>
         <Image source={{uri:flag1}} style={{width:50,height:50,borderRadius:10}}/>
         <Text style={{marginTop:10}}>{name1}</Text>
        </TouchableOpacity>
      </View>
      </View>
    <Text style={{fontWeight:"bold",marginTop:10}}>Medical Professional Information</Text>
    <Text>Applicable if you are a health worker</Text>
    <Text style={{marginTop:25}}>Health License Number</Text>
    <View style={{padding:10,borderWidth:1.0,marginTop:10,borderColor:"#eee"}}>
    <TextInput placeholder="Type Something"/>
    </View>   
   <TouchableOpacity onPress={()=>{
     Alert.alert("COVERS","Profile has been Saved!")
     navigation.navigate('Home')
   }} style={{marginTop:70,backgroundColor:"black",padding:20,alignItems:"center",justifyContent:"center",width:"100%"}}>
   <Text style={{color:"white"}}>Report Case</Text>
   </TouchableOpacity>
   </ScrollView>
 
   <Modal visible={modal}>
      <View style={{padding:10,justifyContent:"center"}}>
      <TouchableOpacity onPress={()=>{setmodal(!modal)}} style={{alignItems:"flex-start",justifyContent:"center"}}>
      <Icon name="close" style={{backgroundColor:"#e3e3e3",padding:8,borderRadius:30}}/>
      </TouchableOpacity>
      <FlatList data={arr.countries}  keyExtractor={item=> item.countryInfo.iso3} renderItem={({item})=> <Modalflat flag={item.countryInfo.flag} count={item.country}/>}  style={{marginTop:10}}/>
      </View>
    </Modal>

    <Modal visible={modal1}>
      <View style={{padding:10,justifyContent:"center"}}>
      <TouchableOpacity onPress={()=>{setmodal1(!modal1)}} style={{alignItems:"flex-start",justifyContent:"center"}}>
      <Icon name="close" style={{backgroundColor:"#e3e3e3",padding:8,borderRadius:30}}/>
      </TouchableOpacity>
      <FlatList data={arr.countries}  keyExtractor={item=> item.countryInfo.iso3} renderItem={({item})=> <Modalflat1 flag={item.countryInfo.flag} count={item.country}/>}  style={{marginTop:10}}/>
      </View>
    </Modal> 
   </View>
  )   
}
