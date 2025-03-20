import React, { useState } from 'react'
import { Dimensions, Image, View } from 'react-native'
import ProfileImage from '../../../assets/images/home/profile.png'
import { Text } from 'react-native'
import { Pressable } from 'react-native'
import { AntDesign, Entypo, Feather, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import BottomNavBar from '../../../components/BottomNavBar'
import { router } from 'expo-router'
import Mastercard from '../../../assets/images/home/mastercard.png'

const Profile = () => {

    const [securityModel, setSecurityModel] = useState(false);
    const [paymentModel, setPaymentModel] = useState(false);


    return (

        <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 40 }}>

            <Text style={{ fontSize: 17 }}>Profile</Text>


            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 15 }}>
                <Image source={ProfileImage} />
                <Text style={{ marginTop: 5, fontSize: 15 }}>John Doe</Text>
                <Text style={{ color: "#727272" }}>johndoe@gmail.com</Text>

                <Pressable style={{ backgroundColor: "#2669FF", paddingHorizontal: 20, paddingVertical: 10, marginTop: 10, borderRadius: 100 }}><Text style={{ color: "#fff" }}>Edit Profile</Text></Pressable>
            </View>

            <Text style={{ color: "#727272", marginTop: 10 }}>Advanced</Text>

            <View style={{ backgroundColor: "#FAFAFA", padding: 10, marginTop: 15, borderRadius: 10 }}>

                <Pressable onPress={() => { setSecurityModel(true) }} style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Entypo name="shield" size={20} color="#037AE0" />
                    <Text>Security</Text>
                </Pressable>

                <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 15 }}>
                    <FontAwesome name="bell-o" size={20} color="#F8BD00" />
                    <Text>Push Notification</Text>
                </Pressable>

            </View>

            <Text style={{ color: "#727272", marginTop: 10 }}>General</Text>

            <View style={{ backgroundColor: "#FAFAFA", padding: 10, marginTop: 15, borderRadius: 10 }}>

                <Pressable onPress={()=>{router.push("/home/profile/setting")}} style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Feather name="settings" size={20} color="#FF8A65" />
                    <Text>Settings</Text>
                </Pressable>

                <Pressable onPress={() => { setPaymentModel(true) }} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 15 }}>
                    <MaterialCommunityIcons name="cards" size={20} color="#1FCD4B" />
                    <Text>Payment Method</Text>
                </Pressable>

                <Pressable onPress={()=>{router.push("/home/profile/about")}} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 15 }}>
                    <Feather name="alert-circle" size={20} color="#FF6F00" />
                    <Text>About Us</Text>
                </Pressable>

                <Pressable onPress={() => router.push("/onboarding")} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 15 }}>
                    <MaterialCommunityIcons name="logout" size={20} color="#FF3B30" />
                    <Text style={{ color: "#FF3B30" }}>Logout</Text>
                </Pressable>

            </View>



            {(!securityModel && !paymentModel) && (<BottomNavBar />)}

            {
                securityModel && (
                    <View style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>

                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 200, borderTopEndRadius: 30 }}>
                            <Text style={{ fontSize: 17 }}>Security</Text>

                            <Pressable onPress={() => router.push("/home/profile/otp")} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                                <Fontisto name="email" size={20} color="#007AFF" />
                                <Text>Email</Text>
                            </Pressable>
                            <Pressable onPress={() => router.push("/home/profile/otp")} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                                <AntDesign name="mobile1" size={20} color="#5E52F1" />
                                <Text>Phone</Text>
                            </Pressable>
                        </View>

                    </View>
                )
            }


            {
                paymentModel && (
                    <View style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>

                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 300, borderTopEndRadius: 30 }}>


                            <Text>Payment</Text>


                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }}>
                                <Image source={Mastercard} />
                                <Text style={{ color: "#000" }}>**** 2025</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }}>
                                <AntDesign name="creditcard" size={20} color="black" />
                                <Text style={{ color: "#000" }}>Add Credit or Debit Card</Text>
                            </View>

                            <Pressable onPress={() => { setPaymentModel(false) }} style={{ width: "100%", backgroundColor: "#DAE5FF", height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 20 }}><Text>Close</Text></Pressable>


                        </View>



                    </View>
                )
            }



        </View>

    )
}

export default Profile