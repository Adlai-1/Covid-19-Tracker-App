import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home1 from './Home1'
import Report from './Report'
import Vitals from './Vitals'
import Settings from './Settings'

const INITIAL_ROUTE_NAME = 'Home';

export default function Home() {
  const Tab = createMaterialBottomTabNavigator()
  return (
     <Tab.Navigator shifting={false} barStyle={{backgroundColor:"white"}} initialRouteName={INITIAL_ROUTE_NAME}>
      <Tab.Screen name="Home" component={Home1} options={{tabBarIcon:"home",title:"Home"}}/>
      <Tab.Screen name="Report" component={Report} options={{tabBarIcon:"file",title:"Report"}}/>
      <Tab.Screen name="Vitals" component={Vitals} options={{tabBarIcon:"doctor",title:"Vitals"}}/>
      <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon:"settings",title:"Settings"}}/>
     </Tab.Navigator> 
  );
}


