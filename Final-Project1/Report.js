import React from 'react';
import {Text,View,TouchableOpacity,FlatList} from 'react-native';
import { Icon, Button } from 'react-native-elements';



export default function Report({navigation}) {

  const Data=[{id:1,type:"Self",description:"My Body Hurts and I have a Headache",number:"0244692262",date:"Thu April 2020"},
  {id:2,type:"Self",description:"My Body Hurts",number:"024469262",date:"Mon April 2020"}]


  const Prior = ()=>{
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
     <Icon name="receipt" size={120}/>
     <Text style={{marginTop:10,fontWeight:"bold",fontSize:20}}>You have not made any Report!</Text>
     <Button title="Make a Report!" type="outline" containerStyle={{marginTop:10}} buttonStyle={{borderStyle:"dashed",borderWidth:1.2}}/>
    </View>
    )
  }

  const Butview = ()=>{
    return(
      <TouchableOpacity onPress={()=>{navigation.navigate('Make Report')}} style={{width:70,height:70,backgroundColor:"black",borderRadius:40,position:"absolute",right:20,bottom:20,justifyContent:"center",alignItems:"center",elevation:6.0}}>
      <Icon name="add" color="white"/>
    </TouchableOpacity>
    )
  }

  const Reportview = ({type,date,cond,num})=>{
    return(
      <View style={{padding:15,borderBottomWidth:1.0,borderColor:"#e3e3e3",width:"100%"}}>
       <View style={{flexDirection:"row"}}>
        <View style={{flex:1,alignItems:"flex-start",justifyContent:"center"}}>
          <Text style={{fontWeight:"bold"}}>{type}</Text>
        </View>
        <View style={{flex:1,padding:5,alignItems:"flex-end",justifyContent:"center"}}>
          <Text>{date}</Text>
        </View>
       </View>
       <Text>{cond}</Text>
       <Text>{num}</Text>
     </View>
    )
  }

  return (
    <View style={{flex:1,backgroundColor:"white",marginTop:80,borderTopWidth:.3,borderColor:"black"}}>
     <FlatList data={Data} keyExtractor={item=>item.id} renderItem={({item})=> <Reportview type={item.type} date={item.date} cond={item.description} num={item.number}/>}/>
     <Butview/>
    </View>
  );
}
