import { Entypo, EvilIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Modal, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import MapImage from '../../assets/images/home/map.png'
import BottomDriverNav from '../../components/BottomDriverNav'
import { router } from 'expo-router'
const Home = () => {

  const [createServiceModel, setCreateServiceModel] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: 50 }}>

        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>

          <View>
            <Text style={{ color: "#727272" }}>Welcome!</Text>
            <Text style={{ color: "#1e1e1e", fontSize: 17, marginTop: 3 }}>Luke</Text>
          </View>

          <Pressable onPress={()=>router.push("/driver/notification")}>
            <MaterialCommunityIcons name="bell-badge-outline" size={24} color="black" />
          </Pressable>

        </View>

        <View style={{ marginTop: 15 }}>
          <Image source={MapImage} style={{ height: 350 }} />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10, marginHorizontal: 20 }}>
          <Pressable onPress={() => setCreateServiceModel(!createServiceModel)} style={{ height: 40, width: "100%", backgroundColor: "#2669FF", justifyContent: "center", alignItems: "center", borderRadius: 8 }}><Text style={{ color: "#fff" }}>Create a service</Text></Pressable>
        </View>


        <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 20 }}>
          <Text>Recent activities</Text>
          <Text style={{ color: "#2669FF" }}>See All</Text>
        </View>

        {
          [1, 2, 3, 4]?.map((i) => (
            <View key={i} style={{ marginTop: 15, backgroundColor: "#FBFCFF", borderRadius: 10, padding: 15, marginHorizontal: 20 }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <MaterialCommunityIcons name="truck-fast-outline" size={20} color="black" />
                  <Text>Towing Service</Text>
                </View>
                <Pressable style={{ backgroundColor: "#E7F7EE", justifyContent: "center", alignItems: "center", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 3 }}><Text style={{ color: "#2CC531" }}>Successful</Text></Pressable>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <View style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 100, borderWidth: 1, borderColor: "#DAE5FF" }}>
                    <MaterialIcons name="gps-fixed" size={17} color="#2669FF" />
                  </View>
                  <View>
                    <Text>Aristotle, New York</Text>
                    <Text style={{ color: "#727272" }}>Pick-up location</Text>
                  </View>
                </View>

                <Pressable style={{ backgroundColor: "#E7F7EE", justifyContent: "center", alignItems: "center", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 3 }}><Text style={{ color: "#2CC531" }}>$800</Text></Pressable>


              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <View style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 100, borderWidth: 1, borderColor: "#DAE5FF" }}>
                    <Entypo name="location-pin" size={17} color="#FF9500" />
                  </View>
                  <View>
                    <Text>Swan, New York</Text>
                    <Text style={{ color: "#727272" }}>Drop-off location</Text>
                  </View>
                </View>

                <Pressable style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 3 }}><Text>20m</Text></Pressable>


              </View>



            </View>
          ))
        }

        <View style={{ marginBottom: 150 }}></View>

      </ScrollView>

      <Modal visible={createServiceModel} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 25, paddingBottom: 50,}}>


            <Text style={{ fontSize:20, marginBottom: 20 }}>Select your service</Text>

            {/* Service Options */}
            {[{ icon: 'truck-fast-outline', name: 'Towing' },{ icon: 'lock-outline', name: 'Locksmith' },{ icon: 'fit-to-screen', name: 'Windshield' },{ icon: 'tire', name: 'Flat tire' },{ icon: 'battery-charging-outline', name: 'Dead battery' },{ icon: 'fuel', name: 'Fuel' },]
            .map((service, index) => (
              <Pressable onPress={()=>{setCreateServiceModel(false);router.push("/driver/create")}} key={index} style={{flexDirection: 'row',alignItems: 'center',paddingVertical: 12,borderBottomWidth: 1,borderBottomColor: '#eee',}}>
                <MaterialCommunityIcons name={service.icon} size={20} style={{ marginRight: 15,color:"#1E1E1E"}} />
                <Text style={{ color:"#1E1E1E"}}>{service.name}</Text>
              </Pressable>
            ))}
            {/* Close Button */}
            <Pressable onPress={() => setCreateServiceModel(false)}style={{marginTop: 20,backgroundColor: '#2669FF',padding: 15,borderRadius: 8,alignItems: 'center',}}>
              <Text style={{ color: 'white', fontSize: 16 }}>Close</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      <BottomDriverNav />

    </View>
  )
}

export default Home