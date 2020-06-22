import React, { useState } from 'react';
import {Text,View,TouchableOpacity,ScrollView,Alert} from 'react-native';




export default function Vital({navigation}){

  const color = "#a2b5de"

  const[c1,setc1] = useState("silver")
  const[c2,setc2] = useState("silver")
  const[c3,setc3] = useState("silver")
  const[c4,setc4] = useState("silver")
  const[c5,setc5] = useState("silver")

  const[co1,setco1] = useState("silver")
  const[co2,setco2] = useState("silver")
  const[co3,setco3] = useState("silver")
  const[co4,setco4] = useState("silver")
  const[co5,setco5] = useState("silver")

  const[col1,setcol1] = useState("silver")
  const[col2,setcol2] = useState("silver")
  const[col3,setcol3] = useState("silver")
  const[col4,setcol4] = useState("silver")
  const[col5,setcol5] = useState("silver")

  const[colo1,setcolo1] = useState("silver")
  const[colo2,setcolo2] = useState("silver")
  const[colo3,setcolo3] = useState("silver")
  const[colo4,setcolo4] = useState("silver")
  const[colo5,setcolo5] = useState("silver")

  const[color1,setcolor1] = useState("silver")
  const[color2,setcolor2] = useState("silver")
  const[color3,setcolor3] = useState("silver")
  const[color4,setcolor4] = useState("silver")
  const[color5,setcolor5] = useState("silver")

  const[acolor1,asetcolor1] = useState("silver")
  const[acolor2,asetcolor2] = useState("silver")
  const[acolor3,asetcolor3] = useState("silver")
  const[acolor4,asetcolor4] = useState("silver")
  const[acolor5,asetcolor5] = useState("silver")

  const[dry,setdry] = useState(0)
  const[tire,settire] = useState(0)
  const[soe,setsoe] = useState(0)
  const[fev,setfev] = useState(0)
  const[anp,setanp] = useState(0)
  const[sob,setsob] = useState(0)
 
 
  const Flagin1 = ()=>{
      setc1(color)
      setc2("silver")
      setc3("silver")
      setc4("silver")
      setc5("silver")
      setdry(0)
  }

  const Flagin2 = ()=>{
      setc2(color)
      setc1("silver")
      setc3("silver")
      setc4("silver")
      setc5("silver")
      setdry(1)
  }

  const Flagin3 = ()=>{
      setc3(color)
      setc2("silver")
      setc1("silver")
      setc4("silver")
      setc5("silver")
      setdry(2)
  }

  const Flagin4 = ()=>{
      setc4(color)
      setc2("silver")
      setc3("silver")
      setc1("silver")
      setc5("silver")
      setdry(3)
  }

  const Flagin5 = ()=>{
      setc5(color)
      setc2("silver")
      setc3("silver")
      setc4("silver")
      setc1("silver")
      setdry(4)
  }

  //View2..............
  const Flagi1 = ()=>{
    setco1(color)
    setco2("silver")
    setco3("silver")
    setco4("silver")
    setco5("silver")
    settire(0)
}

const Flagi2 = ()=>{
    setco2(color)
    setco1("silver")
    setco3("silver")
    setco4("silver")
    setco5("silver")
    settire(1)
}

const Flagi3 = ()=>{
    setco3(color)
    setco2("silver")
    setco1("silver")
    setco4("silver")
    setco5("silver")
    settire(2)
}

const Flagi4 = ()=>{
    setco4(color)
    setco2("silver")
    setco3("silver")
    setco1("silver")
    setco5("silver")
    settire(3)
}

const Flagi5 = ()=>{
    setco5(color)
    setco2("silver")
    setco3("silver")
    setco4("silver")
    setco1("silver")
    settire(4)
}

//View3.......
const Flag1 = ()=>{
  setcol1(color)
  setcol2("silver")
  setcol3("silver")
  setcol4("silver")
  setcol5("silver")
  setsoe(0)
}

const Flag2 = ()=>{
  setcol2(color)
  setcol1("silver")
  setcol3("silver")
  setcol4("silver")
  setcol5("silver")
  setsoe(1)
}

const Flag3 = ()=>{
  setcol3(color)
  setcol2("silver")
  setcol1("silver")
  setcol4("silver")
  setcol5("silver")
  setsoe(2)
}

const Flag4 = ()=>{
  setcol4(color)
  setcol2("silver")
  setcol3("silver")
  setcol1("silver")
  setcol5("silver")
  setsoe(3)
}

const Flag5 = ()=>{
  setcol5(color)
  setcol2("silver")
  setcol3("silver")
  setcol4("silver")
  setcol1("silver")
  setsoe(4)
}
 
//View4...
const Fla1 = ()=>{
  setcolo1(color)
  setcolo2("silver")
  setcolo3("silver")
  setcolo4("silver")
  setcolo5("silver")
  setfev(0)
}

const Fla2 = ()=>{
  setcolo2(color)
  setcolo1("silver")
  setcolo3("silver")
  setcolo4("silver")
  setcolo5("silver")
  setfev(1)
}

const Fla3 = ()=>{
  setcolo3(color)
  setcolo2("silver")
  setcolo1("silver")
  setcolo4("silver")
  setcolo5("silver")
  setfev(2)
}

const Fla4 = ()=>{
  setcolo4(color)
  setcolo2("silver")
  setcolo3("silver")
  setcolo1("silver")
  setcolo5("silver")
  setfev(3)
}

const Fla5 = ()=>{
  setcolo5(color)
  setcolo2("silver")
  setcolo3("silver")
  setcolo4("silver")
  setcolo1("silver")
  setfev(4)
}

//View5...
const Fl1 = ()=>{
  setcolor1(color)
  setcolor2("silver")
  setcolor3("silver")
  setcolor4("silver")
  setcolor5("silver")
  setanp(0)
}

const Fl2 = ()=>{
  setcolor2(color)
  setcolor1("silver")
  setcolor3("silver")
  setcolor4("silver")
  setcolor5("silver")
  setanp(1)
}

const Fl3 = ()=>{
  setcolor3(color)
  setcolor2("silver")
  setcolor1("silver")
  setcolor4("silver")
  setcolor5("silver")
  setanp(2)
}

const Fl4 = ()=>{
  setcolor4(color)
  setcolor2("silver")
  setcolor3("silver")
  setcolor1("silver")
  setcolor5("silver")
  setanp(3)
}

const Fl5 = ()=>{
  setcolor5(color)
  setcolor2("silver")
  setcolor3("silver")
  setcolor4("silver")
  setcolor1("silver")
  setanp(4)
}
//View6...
const F1 = ()=>{
  asetcolor1(color)
  asetcolor2("silver")
  asetcolor3("silver")
  asetcolor4("silver")
  asetcolor5("silver")
  setsob(0)
}

const F2 = ()=>{
  asetcolor2(color)
  asetcolor1("silver")
  asetcolor3("silver")
  asetcolor4("silver")
  asetcolor5("silver")
  setsob(1)
}

const F3 = ()=>{
  asetcolor3(color)
  asetcolor2("silver")
  asetcolor1("silver")
  asetcolor4("silver")
  asetcolor5("silver")
  setsob(2)
}

const F4 = ()=>{
  asetcolor4(color)
  asetcolor2("silver")
  asetcolor3("silver")
  asetcolor1("silver")
  asetcolor5("silver")
  setsob(3)
}

const F5 = ()=>{
  asetcolor5(color)
  asetcolor2("silver")
  asetcolor3("silver")
  asetcolor4("silver")
  asetcolor1("silver")
  setsob(4)
}



console.log(sob)




const Customview = ({name,top,color1,color2,color3,color4,color5,funct1,funct2,funct3,funct4,funct5,})=>{
        return(
          <View style={{justifyContent:"center",alignItems:"flex-start",padding:15,backgroundColor:"white",borderRadius:8,elevation:15,marginTop:top}}>
            <Text style={{fontWeight:"bold",padding:5}}>{name}</Text>
            <View style={{flexDirection:"row",borderTopWidth:1.0,borderRadius:30}}>
             <TouchableOpacity onPress={funct1} style={{flex:1,padding:10,alignItems:"center"}}>
              <View style={{width:50,height:50,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:color1}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>0</Text>
              </View>
              <Text>None</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={funct2} style={{flex:1,padding:10,alignItems:"center"}}>
             <View style={{width:50,height:50,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:color2}}>
             <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>1</Text>
             </View>
              <Text>Mild</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={funct3} style={{flex:1,padding:10,alignItems:"center"}}>
             <View style={{width:50,height:50,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:color3}}>
             <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>2</Text>
             </View>
              <Text>Mild</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={funct4} style={{flex:1,padding:10,alignItems:"center"}}>
             <View style={{width:50,height:50,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:color4}}>
             <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>3</Text>
             </View>
              <Text>Semi</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={funct5} style={{flex:1,padding:10,alignItems:"center"}}>
             <View style={{width:50,height:50,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:color5}}>
             <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>4</Text>
             </View>
              <Text>High</Text>
             </TouchableOpacity>
            </View>
          </View>
        )
      }

  return(
    <View style={{marginTop:60,flex:1,backgroundColor:"white"}}>
    <ScrollView contentContainerStyle={{padding:15}}>
    <Customview name="Dry Cough" color1={c1} color2={c2} color3={c3} color4={c4} color5={c5} funct1={Flagin1} funct2={Flagin2} funct3={Flagin3} funct4={Flagin4} funct5={Flagin5} />
    <Customview name="Tiredness" top={10} color1={co1} color2={co2} color3={co3} color4={co4} color5={co5} funct1={Flagi1} funct2={Flagi2} funct3={Flagi3} funct4={Flagi4} funct5={Flagi5}/>
    <Customview name="Soe Throat" top={10} color1={col1} color2={col2} color3={col3} color4={col4} color5={col5} funct1={Flag1} funct2={Flag2} funct3={Flag3} funct4={Flag4} funct5={Flag5}/>
    <Customview name="Fever" top={10} color1={colo1} color2={colo2} color3={colo3} color4={colo4} color5={colo5} funct1={Fla1} funct2={Fla2} funct3={Fla3} funct4={Fla4} funct5={Fla5}/>
    <Customview name="Aches and Pain" top={10} color1={color1} color2={color2} color3={color3} color4={color4} color5={color5} funct1={Fl1} funct2={Fl2} funct3={Fl3} funct4={Fl4} funct5={Fl5}/>
    <Customview name="Shortness of Breath" top={10} color1={acolor1} color2={acolor2} color3={acolor3} color4={acolor4} color5={acolor5} funct1={F1} funct2={F2} funct3={F3} funct4={F4} funct5={F5}/>
    <TouchableOpacity onPress={()=>{
      Alert.alert("COVERS","Vitals have been Logged in!")
      navigation.navigate('Vitals')
    }} style={{marginTop:20,alignItems:"center",justifyContent:"center",backgroundColor:"grey",padding:18,elevation:15,borderRadius:5}}>
     <Text style={{color:"white"}}>Log Vitals</Text>
    </TouchableOpacity>
   </ScrollView>
   </View>
  )
}