import React from 'react';
import {Text, View,TouchableOpacity,ScrollView, StatusBar } from 'react-native';


export default function Notice({navigation}) {
  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"white",marginTop:80,flex:8}}>
        <StatusBar backgroundColor="black"/>
     <View style={{flex:3,padding:8}}>
         <ScrollView showsVerticalScrollIndicator={false}>
             <Text style={{fontWeight:"bold",fontSize:16}}>Background</Text>
             <Text>Citizens are advised to provide accurate information on this application to help the Goverment and Health services be able to managing and containing the spread of the Coronavirus.</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Collection of your Information</Text>
             <Text>We may collect information about you in a variety of ways.The information we may collect via this Application depends on the contents and materials you use, and includes:</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Personal Information</Text>
             <Text>Demographic and personally identifiable information that you voluntarily give to us while using this application is anonymaized and is only made available to the relevant authorities in cases of emergency.</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Geo-location Information</Text>
             <Text>We may request permission to track your location from your mobile device either continually or whiles using the Application to provide location-based services.If you wish to change this permission, you may do so in your device's settings.</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Mobile device access</Text>
             <Text>We may request permission to certain features from your mobile device, including bluetooth,GPS etc.If you wish to change this permission you can do so in the app's settings.</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Push notifications</Text>
             <Text>We may request to send you push notifications regarding your account or the Application.If you wish to opt-out from recieving these types of communications,you may turn them off in the app's settings.</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Use of your Information</Text>
             <Text>Having accurate information about you permits us to provide you with a smooth, efficient and customized experience.Specifically, we may use information collected about you via this Application to</Text>
             <Text style={{marginTop:8}}>- Assist relevant Authorities to respond to suspected COVID-19 cases</Text>
             <Text>- Compile anonymous statistical data and analysis</Text>
             <Text>- Deliver targeted notifications concerning COVID-19</Text>
             <Text>- Monitor and analyze usage trends to inform sensitization efforts</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Disclosure of your Information</Text>
             <Text>We will be sharing all information we collect from this Application to the relevant authorities for them to do their work effectively.</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Options regarding your Information</Text>
             <Text>You may at anytime review or change the information in your account or terminate your account by</Text>
             <Text>- Logging into your account settings and updating your account</Text>
             <Text>- Contacting us using the contact inforamtion provided below</Text>
             <Text>[send emails to: info@polymorphlabs.io]</Text>
             <Text style={{marginTop:15}}>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigation, enforce our Terms of Use and/or comply with legal requirements.</Text>
             <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Contact Us</Text>
             <Text>If you have questions or comments about the Privacy Policy, please contact us at</Text>
             <Text style={{textAlign:"right",marginTop:20}}>Polymorphs Labs Gh Ltd.</Text>
             <Text style={{textAlign:"right"}}>17 National Service Avenue Market Street</Text>
             <Text style={{textAlign:"right"}}>Haatso, Accra</Text>
             <Text style={{textAlign:"right"}}>Ghana</Text>
             <Text style={{textAlign:"right"}}>+233 204045782</Text>
             <Text style={{textAlign:"right"}}>info@polymorphlabs.io</Text>
         </ScrollView>
     </View>
     <View style={{flex:0.5,alignItems:"center",justifyContent:"center"}}>
         <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={{backgroundColor:"black",padding:18,width:"94%",alignItems:"center",justifyContent:"center"}}>
             <Text style={{color:"white"}}>Lets get Started...</Text>
         </TouchableOpacity>
     </View>
    </View>
  );
}
