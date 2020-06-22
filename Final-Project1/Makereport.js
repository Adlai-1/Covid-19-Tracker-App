import React ,{useState} from 'react'
import {View,Text,Alert,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import { Icon } from 'react-native-elements';


export default function Make({navigation}){
  
  const[colo,setcolo] = useState('grey')
  const[colo1,setcolo1] = useState('grey')
  const[person,setperson] = useState('')

  const Flaggin = ()=>{
      setcolo("black")
      setcolo1("grey")
      setperson("self")
  }
  
  const Flaggin1 = ()=>{
      setcolo1("black")
      setcolo("grey")
      setperson("individual")
  }
  
  console.log(person)

    return(     
      <ScrollView style={{padding:10,marginTop:60,backgroundColor:"white"}}> 
       <Text style={{fontWeight:"bold"}}>Who are you Reporting?</Text>
       <View style={{flexDirection:"row",marginTop:10,alignItems:"center"}}>
       <TouchableOpacity onPress={()=>{Flaggin()}} style={{flexDirection:"row",alignItems:"center"}}>
         <View style={{width:25,height:25,borderRadius:20,justifyContent:"center",alignItems:"center",backgroundColor:colo,marginRight:5}}>
           <Icon name="check" color="white" size={15}/>
         </View>
         <Text style={{marginRight:10}}>Self</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{Flaggin1()}} style={{flexDirection:"row",alignItems:"center"}}>
         <View style={{width:25,height:25,borderRadius:20,justifyContent:"center",alignItems:"center",backgroundColor:colo1,marginRight:5}}>
           <Icon name="check" color="white" size={15}/>
         </View>
         <Text style={{marginRight:10}}>Other Individual</Text>
         </TouchableOpacity>
       </View>
       <Text style={{fontWeight:"bold",marginTop:15}}>Location or Digital Adress</Text>
       <View style={{padding:10,borderWidth:1.0,marginTop:10,borderColor:"#eee"}}>
         <TextInput placeholder="eg GA-492-74"/>
       </View>
       <View style={{flexDirection:"row",marginTop:10}}>
        <View style={{flex:1.5}}>
         <Text style={{fontWeight:"bold",alignItems:"flex-start"}}>Nearest Landmark</Text>
         <View style={{padding:10,borderWidth:1.0,marginTop:10,borderColor:"#eee"}}>
          <TextInput placeholder="eg Goil Station"/>
         </View>
        </View>
        <View style={{flex:1,alignItems:"flex-end"}}>
        <Text style={{fontWeight:"bold"}}>Alternate Contact</Text>
        <View style={{padding:10,borderWidth:1.0,marginTop:10,borderColor:"#eee",width:"95%"}}>
         <TextInput placeholder="Contact number"/>
        </View> 
        </View>
       </View>
       <Text style={{fontWeight:"bold",marginTop:10}}>Descriptions</Text>
       <View style={{padding:10,borderWidth:1.0,marginTop:10,borderColor:"#eee",height:100}}>
         <TextInput placeholder="Type Something" multiline={true}/>
       </View>
       <TouchableOpacity onPress={()=>{
         Alert.alert("COVERS","Data is Saved!")
         navigation.navigate('Report')
       }} style={{backgroundColor:"black",marginTop:180,padding:20,alignItems:"center",justifyContent:"center",width:"100%"}}>
       <Text style={{color:"white"}}>Report Case</Text>
      </TouchableOpacity>
      </ScrollView>
    )
}