import React, { useState } from 'react'
import { Dimensions, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import BottomNavBar from '../../components/BottomNavBar'
import MapImage from '../../assets/images/home/map.png'
import Logo from '../../assets/images/logo.png'
import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const Map = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = [
        { name: "All", icon: null },
        { name: "Towing", icon: <MaterialCommunityIcons name="truck-fast-outline" size={20} color="#1E1E1E" /> },
        { name: "Locksmith", icon: <FontAwesome name="lock" size={20} color="#1E1E1E" /> },
        { name: "Windshield", icon: <MaterialCommunityIcons name="car-windshield-outline" size={20} color="#1E1E1E" /> },
        { name: "Flat tire", icon: <MaterialCommunityIcons name="tire" size={20} color="#1E1E1E" /> },
        { name: "Dead Battery", icon: <Feather name="battery" size={20} color="#1E1E1E" /> },
        { name: "Fuel", icon: <MaterialCommunityIcons name="fuel" size={20} color="#1E1E1E" /> },
    ]

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>

                <Image source={MapImage} style={{ height: Dimensions.get("window").height, zIndex: -20 }} />

                <Pressable onPress={()=>router.push("/home")} style={{ position: "absolute", top: 30, width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

                    <View style={{ backgroundColor: "#fff", width: 35, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 100, marginLeft: 20 }}>
                        <Ionicons name="chevron-back" size={20} color="#2669FF" />
                    </View>

                    <Image source={Logo} style={{ width: 44, height: 30, marginRight: 20 }} />


                </Pressable>


                <View style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: "#fff", paddingHorizontal: 20, paddingVertical: 25, borderTopRightRadius: 40, borderTopLeftRadius: 40, height: 400, zIndex: -10 }}>


                    <Text style={{ fontSize: 16 }}>Nearby services</Text>
                    <TextInput placeholderTextColor={"#8f8f8f"} placeholder='Search for drivers' style={{ width: "100%", height: 45, borderWidth: 1, borderColor: "#DAE5FF", marginTop: 10, paddingHorizontal: 20, borderRadius: 10, marginBottom: 10 }} />


                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical:15 }}>
                        {
                            categories?.map((i) => (
                                <Pressable onPress={() => setSelectedCategory(i?.name)} key={i.name} style={{ borderWidth: 1, borderColor: "#DAE5FF", flexDirection: "row", alignItems: "center", gap: 3, backgroundColor: i?.name === selectedCategory ? "#2669FF" : "#fff", paddingHorizontal: 20, borderRadius: 100, height: 40 }}>
                                    {i?.icon && i.name !== selectedCategory && i?.icon}
                                    <Text style={{ color: i?.name === selectedCategory && "#fff" }}>{i?.name}</Text>
                                </Pressable>
                            ))
                        }
                    </ScrollView>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} >

                        <Pressable onPress={()=>router.push("/home/request")} style={{ borderWidth: 1, borderColor: "#DAE5FF", height: 100, marginTop: 15, borderRadius: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>

                            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>

                                <View style={{ borderWidth: 1, borderColor: "#DAE5FF", height: 70, width: 70, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Feather name="lock" size={20} color="black" />
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 80, marginBottom: 5 }}>
                                        <View style={{ width: 5, height: 5, backgroundColor: "#34C759", borderRadius: 100 }}></View>
                                        <Text style={{ fontSize: 13 }}>Available</Text>
                                    </View>
                                    <Text style={{ marginBottom: 1, fontSize: 13 }}>Unlock Ltd</Text>
                                    <Text style={{ color: "#727272", fontSize: 13 }}>Locksmith services</Text>
                                </View>

                            </View>

                            <View>
                                <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 55, marginBottom: 5 }}>
                                    <AntDesign name="star" size={12} color="#F8BD00" />
                                    <Text style={{ fontSize: 13 }}>4.0</Text>
                                </View>
                                <View>
                                    <Text style={{ marginBottom: 1, fontSize: 13 }}>$200/3  m/h</Text>
                                    <Text style={{ color: "#2669FF", fontSize: 13 }}>ETA - 20mins</Text>
                                </View>
                            </View>

                        </Pressable>

                        <Pressable onPress={()=>router.push("/home/request")} style={{ borderWidth: 1, borderColor: "#DAE5FF", height: 100, marginTop: 15, borderRadius: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>

                            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>

                                <View style={{ borderWidth: 1, borderColor: "#DAE5FF", height: 70, width: 70, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                    <FontAwesome5 name="truck-loading" size={20} color="black" />
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 80, marginBottom: 5 }}>
                                        <View style={{ width: 5, height: 5, backgroundColor: "#34C759", borderRadius: 100 }}></View>
                                        <Text style={{ fontSize: 13 }}>Available</Text>
                                    </View>
                                    <Text style={{ marginBottom: 1, fontSize: 13 }}>Towly Ltd</Text>
                                    <Text style={{ color: "#727272", fontSize: 13 }}>Towing services</Text>
                                </View>

                            </View>

                            <View>
                                <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 55, marginBottom: 5 }}>
                                    <AntDesign name="star" size={12} color="#F8BD00" />
                                    <Text style={{ fontSize: 13 }}>4.0</Text>
                                </View>
                                <View>
                                    <Text style={{ marginBottom: 1, fontSize: 13 }}>$200/3  m/h</Text>
                                    <Text style={{ color: "#2669FF", fontSize: 13 }}>ETA - 20mins</Text>
                                </View>
                            </View>

                        </Pressable>

                        <Pressable onPress={()=>router.push("/home/request")} style={{ borderWidth: 1, borderColor: "#DAE5FF", height: 100, marginTop: 15, borderRadius: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>

                            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>

                                <View style={{ borderWidth: 1, borderColor: "#DAE5FF", height: 70, width: 70, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Feather name="lock" size={20} color="black" />
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 80, marginBottom: 5 }}>
                                        <View style={{ width: 5, height: 5, backgroundColor: "#34C759", borderRadius: 100 }}></View>
                                        <Text style={{ fontSize: 13 }}>Available</Text>
                                    </View>
                                    <Text style={{ marginBottom: 1, fontSize: 13 }}>Unlock Ltd</Text>
                                    <Text style={{ color: "#727272", fontSize: 13 }}>Locksmith services</Text>
                                </View>

                            </View>

                            <View>
                                <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 55, marginBottom: 5 }}>
                                    <AntDesign name="star" size={12} color="#F8BD00" />
                                    <Text style={{ fontSize: 13 }}>4.0</Text>
                                </View>
                                <View>
                                    <Text style={{ marginBottom: 1, fontSize: 13 }}>$200/3  m/h</Text>
                                    <Text style={{ color: "#2669FF", fontSize: 13 }}>ETA - 20mins</Text>
                                </View>
                            </View>

                        </Pressable>

                    </ScrollView>


                </View>

            </ScrollView>

            <BottomNavBar />
        </View>
    )
}

export default Map