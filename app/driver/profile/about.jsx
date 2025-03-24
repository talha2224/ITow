import { AntDesign, Entypo, Feather, FontAwesome6, Fontisto, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Logo from '../../../assets/images/logo.png'
import Rate from '../../../assets/images/home/rate.png'

const About = () => {
    const [privacyModel, setprivacyModel] = useState(false)
    const [termsModel, settermsModel] = useState(false)
    return (
        <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: 45, paddingHorizontal: 20, }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <TouchableOpacity onPress={() => { router.push("/driver/profile") }} style={{ flexDirection: "row", gap: 6 }}>
                    <Entypo name="chevron-left" size={20} color="black" />
                    <Text style={{ fontSize: 16 }}>Back</Text>
                </TouchableOpacity>

                <Text style={{ marginLeft: -30 }}>About Us</Text>

                <View></View>

            </View>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>

                <Image source={Logo} />
                <Text style={{ color: "#727272", marginTop: 6 }}>Version  2.6.0</Text>
                <Text style={{ color: "#727272", marginVertical: 6 }}>Would you recommend Peerpact to friends?</Text>
                <Image source={Rate} />
                <TextInput placeholder='Add Notes' style={{ marginTop: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10, width: "100%" }} />

                <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20, width: "100%", backgroundColor: "#2669FF", height: 45, borderRadius: 100, justifyContent: "center" }}>
                    <Text style={{ color: "#fff" }}>Send</Text>
                </Pressable>
            </View>

            <View style={{ marginTop: 40 }}>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text>App Upgrade</Text>
                    <Text style={{ color: "#727272" }}>V2.20</Text>
                </View>

                <Pressable onPress={() => { setprivacyModel(true) }} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                    <Text>Privacy Policy</Text>
                    <FontAwesome6 name="angle-right" size={17} color="#727272" />
                </Pressable>

                <Pressable onPress={() => { settermsModel(true) }} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                    <Text>Terms & Conditions</Text>
                    <FontAwesome6 name="angle-right" size={17} color="#727272" />
                </Pressable>


                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                    <Text>Clear cache</Text>
                    <Text style={{ color: "#727272" }}>220 Mb</Text>
                </View>

            </View>

            {
                termsModel && (
                    <Pressable onPress={()=>settermsModel(false)} style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>

                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 320, borderTopEndRadius: 30 }}>
                            <Text style={{ fontSize: 17 }}>Terms & Conditions</Text>

                            <Text style={{ color: "#2669FF", marginTop: 15 }}>ITow</Text>

                            <Text style={{ marginTop: 12, color: "#727272" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</Text>

                            <Text style={{ marginTop: 12, color: "#727272" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</Text>

                        </View>

                    </Pressable>
                )
            }

            {
                privacyModel && (
                    <Pressable onPress={()=>setprivacyModel(false)} style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>

                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 320, borderTopEndRadius: 30 }}>
                            <Text style={{ fontSize: 17 }}>Privacy Policy</Text>

                            <Text style={{ color: "#2669FF", marginTop: 15 }}>ITow</Text>

                            <Text style={{ marginTop: 12, color: "#727272" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</Text>

                            <Text style={{ marginTop: 12, color: "#727272" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</Text>

                        </View>

                    </Pressable>
                )
            }


        </View>
    )
}

export default About