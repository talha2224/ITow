import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import BottomNavBar from '../../components/BottomNavBar'
import { EvilIcons, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import Serice1 from '../../assets/images/home/service-1.png'
import Serice2 from '../../assets/images/home/service-2.png'
import { router } from 'expo-router'

const Service = () => {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    { name:"All",icon:null },
    { name:"Towing",icon:<MaterialCommunityIcons name="truck-fast-outline" size={20} color="black" /> },
    { name:"Locksmith",icon:<FontAwesome name="lock" size={20} color="black" /> },
    { name:"Windshield",icon:<MaterialCommunityIcons name="car-windshield-outline" size={20} color="black" /> },
    { name:"Flat tire",icon:<MaterialCommunityIcons name="tire" size={20} color="black" /> },
    { name:"Dead Battery",icon:<Feather name="battery" size={20} color="black" /> },
    { name:"Fuel",icon:<MaterialCommunityIcons name="fuel" size={20} color="black" /> },
  ]

  return (

    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: 50, paddingHorizontal: 20 }}>

        <View style={{ justifyContent:"center", alignItems: "center", flexDirection: "row" }}>

            <Text style={{fontSize:16}}>Services</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection:"row",alignItems:"center",marginTop:20,gap:10}}>
          {
            categories?.map((i)=>(
              <Pressable onPress={()=>setSelectedCategory(i?.name)} key={i.name} style={{borderWidth:1,borderColor:"#DAE5FF",flexDirection:"row",alignItems:"center",gap:3,backgroundColor:i?.name===selectedCategory?"#2669FF":"#fff",paddingHorizontal:20,paddingVertical:10,borderRadius:100}}>
                {i?.icon && i.name!==selectedCategory && i?.icon}
                <Text style={{color:i?.name===selectedCategory&&"#fff"}}>{i?.name}</Text>
              </Pressable>
            ))
          }
        </ScrollView>

        <View style={{justifyContent:"center",alignItems:"center",marginTop:20,paddingBottom:100}}>
            <Pressable onPress={()=>router.push("/home/request")}><Image source={Serice1} style={{width:320,height:170,marginBottom:20}}/></Pressable>
            <Pressable onPress={()=>router.push("/home/request")}><Image source={Serice2} style={{width:320,height:170,marginBottom:20}}/></Pressable>
            <Pressable onPress={()=>router.push("/home/request")}><Image source={Serice1} style={{width:320,height:170,marginBottom:20}}/></Pressable>
        </View>




      </ScrollView>

      <BottomNavBar />

    </View>
  )
}

export default Service 