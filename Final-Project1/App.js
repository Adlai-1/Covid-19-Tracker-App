import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Phone from './Phone'
import Verify from './Verify'
import Notice from './Notice'
import Home from './Home'
import { Icon,Avatar } from "react-native-elements";
import { TouchableOpacity,View,Text } from 'react-native';
import Profile from './Profile'
import Assesment from './Self_Assesment'
import FAQ from './FAQ'
import Make from './Makereport'
import Vital from './Vital';
import Privacy from './Privacy';
import Note from './Notifications'
import Audio from './Audio'

export default function App({navigation}) {
  
  const Stack = createStackNavigator()
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Phone" component={Phone} options={{headerShown:false}}/>
       <Stack.Screen name="Verify" component={Verify} options={{headerShown:false,headerTransparent:true}}/>
       <Stack.Screen name="Notice" component={Notice} options={{headerLeft:null,headerTransparent:true,header:()=>{
         return(
           <View style={{flex:1,backgroundColor:"white",height:80,justifyContent:"center",padding:10,borderBottomWidth:0.5}}>
             <Text style={{fontSize:30,fontWeight:"bold",marginTop:10}}>GENERAL INFORMATION</Text>
           </View>
         )
       }}}/>
       <Stack.Screen name="Home" component={Home} options={{headerTransparent:true,headerLeft:null,header:({navigation})=>{
         return(
           <View style={{flexDirection:"row",flex:1,height:80,backgroundColor:"white"}}>
             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
               <Avatar rounded={true} size={52} icon={{name:"person",color:"black",size:38}} overlayContainerStyle={{backgroundColor:"#e3e3e3"}}/>
              </TouchableOpacity>
             </View>
             <View style={{flex:2,justifyContent:"center",alignItems:"flex-start"}}>
               <Text style={{fontWeight:"bold",fontSize:40}}>Covers</Text>
             </View>
             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
               <TouchableOpacity onPress={()=>{navigation.navigate('Notifications')}}>
                <Icon name="notifications" size={42}/>
               </TouchableOpacity>
             </View>
           </View>
         )
       }}}/>
       <Stack.Screen name="Profile" component={Profile} options={{headerTransparent:true}}/>
       <Stack.Screen name="Notifications" component={Note} options={{headerTransparent:true}}/>
       <Stack.Screen name="Log Symptoms" component={Vital} options={{headerTransparent:true}}/>
       <Stack.Screen name="Make Report" component={Make} options={{headerTransparent:true}}/>
       <Stack.Screen name="Assesment" component={Assesment} options={{headerTransparent:true,header:({navigation})=>{
         return(
          <View style={{flexDirection:"row",flex:1,height:80,backgroundColor:"white"}}>
          <View style={{flex:0.8,alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}}>
            <Icon name="arrow-back"/>
           </TouchableOpacity>
          </View>
          <View style={{flex:4,justifyContent:"center",alignItems:"flex-start"}}>
            <Text style={{fontWeight:"bold",fontSize:30}}>Assesment</Text>
          </View>
        </View>
         )
       }}}/>
       <Stack.Screen name="FAQs" component={FAQ} options={{headerTransparent:true,header:({navigation})=>{
         return(
          <View style={{flexDirection:"row",flex:1,height:80,backgroundColor:"white"}}>
          <View style={{flex:0.8,alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}}>
           <Icon name="arrow-back"/>
           </TouchableOpacity>
          </View>
          <View style={{flex:4,justifyContent:"center",alignItems:"flex-start"}}>
            <Text style={{fontWeight:"bold",fontSize:30}}>FAQ</Text>
          </View>
        </View>
         )
       }}}/>
       <Stack.Screen name="Privacy Policy" component={Privacy} options={{headerTransparent:true,header:({navigation})=>{
         return(
        <View style={{flexDirection:"row",flex:1,height:80,backgroundColor:"white",borderBottomWidth:0.5}}>
          <View style={{flex:0.8,alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}}>
           <Icon name="arrow-back"/>
           </TouchableOpacity>
          </View>
          <View style={{flex:4,justifyContent:"center",alignItems:"flex-start"}}>
            <Text style={{fontWeight:"bold",fontSize:30}}>Privacy Policy</Text>
          </View>
        </View>
         )
       }}}/>
       <Stack.Screen name="Audio" component={Audio} options={{headerTransparent:true,header:({navigation})=>{
         return(
        <View style={{flexDirection:"row",flex:1,height:80,backgroundColor:"white",borderBottomWidth:0.5}}>
          <View style={{flex:0.8,alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}}>
           <Icon name="arrow-back"/>
           </TouchableOpacity>
          </View>
          <View style={{flex:4,justifyContent:"center",alignItems:"flex-start"}}>
            <Text style={{fontWeight:"bold",fontSize:30}}>COVERS HUB</Text>
          </View>
        </View>
         )
       }}}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

