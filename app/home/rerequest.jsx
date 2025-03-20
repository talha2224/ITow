import React, { useState } from 'react'
import { Dimensions, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import BottomNavBar from '../../components/BottomNavBar'
import MapImage from '../../assets/images/home/map.png'
import Logo from '../../assets/images/logo.png'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Profile from '../../assets/images/home/profile.png'

const ReRequest = () => {


    return (
        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>

                <Image source={MapImage} style={{ height: Dimensions.get("screen").height, zIndex: -20 }} />

                <Pressable onPress={() => router.push("/home/history")} style={{ position: "absolute", top: 30, width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

                    <View style={{ backgroundColor: "#fff", width: 35, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 100, marginLeft: 20 }}>
                        <Ionicons name="chevron-back" size={20} color="#2669FF" />
                    </View>

                    <Image source={Logo} style={{ width: 44, height: 30, marginRight: 20 }} />


                </Pressable>


                <View style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "flex-end" }}>

                    <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 300, borderTopEndRadius: 30 }}>


                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, borderWidth: 1, borderColor: "#DAE5FF", padding: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                                <Image source={Profile} style={{ width: 30, height: 30 }} />
                                <View>
                                    <Text>Luke James</Text>
                                    <Text style={{ color: "#727272" }}>Birdsall, New York</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Chevrolet</Text>
                                <Text style={{ color: "#727272" }}>Wheel lift</Text>
                            </View>
                        </View>


                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: "#727272" }}>Feedback</Text>
                        </View>

                        <TextInput placeholder='He was a friendly and a very nice young man.' style={{ marginTop: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }} />



                    </View>

                </View>

                <View style={{ position: "absolute", top: -10, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "center", alignItems: "center"}}>

                    <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: 340, borderRadius: 20, height: 140, borderTopEndRadius: 30 }}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                            <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                                <MaterialIcons name="radar" size={20} color="#2669FF" />
                                <View>
                                    <Text>Aristotle, New York</Text>
                                    <Text style={{ color: "#727272" }}>Pick-up location</Text>
                                </View>
                            </View>

                            <View style={{ borderWidth: 1, borderColor: "#AEFEBF", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}><Text style={{ color: "#34C759" }}>$800</Text></View>

                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>

                            <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                                <Entypo name="location-pin" size={20} color="#FF9500" />
                                <View>
                                    <Text>Swan, New York</Text>
                                    <Text style={{ color: "#727272" }}>Drop-off location</Text>
                                </View>
                            </View>

                            <View style={{ borderWidth: 1, borderColor: "#DDDDDD", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}><Text style={{ color: "#000" }}>20m</Text></View>

                        </View>

                    </View>

                </View>






            </ScrollView>

        </View>
    )
}

export default ReRequest