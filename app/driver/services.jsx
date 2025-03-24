import React, { useState } from 'react'
import { Image, Modal, Pressable, ScrollView, Text, View } from 'react-native'
import BottomNavBar from '../../components/BottomNavBar'
import { EvilIcons, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import Serice1 from '../../assets/images/home/service-1.png'
import Serice2 from '../../assets/images/home/service-2.png'
import { router } from 'expo-router'
import BottomDriverNav from '../../components/BottomDriverNav'

const Service = () => {
    const [createServiceModel, setCreateServiceModel] = useState(false)

    return (

        <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: 50, paddingHorizontal: 20 }}>

                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>

                    <Text style={{ fontSize: 16 }}>Services</Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, paddingBottom: 100 }}>
                    <Pressable onPress={() => setCreateServiceModel(true)}><Image source={Serice1} style={{ width: 320, height: 170, marginBottom: 20 }} /></Pressable>
                    <Pressable onPress={() => setCreateServiceModel(true)}><Image source={Serice2} style={{ width: 320, height: 170, marginBottom: 20 }} /></Pressable>
                    <Pressable onPress={() => setCreateServiceModel(true)}><Image source={Serice1} style={{ width: 320, height: 170, marginBottom: 20 }} /></Pressable>
                </View>




            </ScrollView>

            <Modal visible={createServiceModel} animationType="slide" transparent={true}>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 25, paddingBottom: 50, }}>


                        <Text style={{ fontSize: 20, marginBottom: 20 }}>Select your service</Text>

                        {/* Service Options */}
                        {[{ icon: 'truck-fast-outline', name: 'Towing' }, { icon: 'lock-outline', name: 'Locksmith' }, { icon: 'fit-to-screen', name: 'Windshield' }, { icon: 'tire', name: 'Flat tire' }, { icon: 'battery-charging-outline', name: 'Dead battery' }, { icon: 'fuel', name: 'Fuel' },]
                            .map((service, index) => (
                                <Pressable onPress={() => { setCreateServiceModel(false); router.push("/driver/create") }} key={index} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee', }}>
                                    <MaterialCommunityIcons name={service.icon} size={20} style={{ marginRight: 15, color: "#1E1E1E" }} />
                                    <Text style={{ color: "#1E1E1E" }}>{service.name}</Text>
                                </Pressable>
                            ))}
                        {/* Close Button */}
                        <Pressable onPress={() => setCreateServiceModel(false)} style={{ marginTop: 20, backgroundColor: '#2669FF', padding: 15, borderRadius: 8, alignItems: 'center', }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Close</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <BottomDriverNav />

        </View>
    )
}

export default Service 