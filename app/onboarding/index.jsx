import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Img1 from '../../assets/images/onboarding/first.png'
import Img2 from '../../assets/images/onboarding/second.png'
import Img3 from '../../assets/images/onboarding/third.png'
import logo from '../../assets/images/logo.png'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Onboarding = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const [showModel, setShowModel] = useState(false)

    const data = [
        {
            id: 1,
            img: Img1,
            heading: "Tow Services at Your Fingertips",
            description: "Whether you need a tow, a locksmith, or roadside assistance, we’re here to help."
        },
        {
            id: 2,
            img: Img2,
            heading: "We’ve Got You Covered Worry Less",
            description: "We are Fast, Reliable, and Just a Tap Away For You To Get Our Profession Service."
        },
        {
            id: 3,
            img: Img3,
            heading: "Your Convenient Roadside  Assistance",
            description: "Anywhere, Anytime, We Are Always Available For Your Emergency Services"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true })
                .start(() => {
                    setCurrentStep(prev => (prev + 1) % data.length);
                    Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
                });
        }, 2000);

        return () => clearInterval(interval);
    }, [fadeAnim]);

    const handleRegistration = async(role)=>{
        if(role=="customer"){
            await AsyncStorage.setItem("registrationType","customer")
            router.push("/auth/register")
        }
        else{
            await AsyncStorage.setItem("registrationType","driver")
            router.push("/auth/driver") 
        }
    }

    return (

        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}>

            <ImageBackground source={data[currentStep]?.img} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />

            <View style={{ position: "absolute", bottom: 0, width: Dimensions.get("screen").width, paddingHorizontal: 20, paddingBottom: 20 }}>

                <Text style={{ fontSize: 24, color: "#fff", textAlign: "center", fontWeight: "500" }}>{data[currentStep].heading}</Text>
                <Text style={{ color: "#DDDDDD", textAlign: "center", marginTop: 16 }}>{data[currentStep].description}</Text>

                <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", gap: 5, marginTop: 20 }}>
                    <View style={{ width: 40, height: 4, borderRadius: 10, backgroundColor: currentStep == 0 ? "#2E70FF" : "#DDDDDD" }}></View>
                    <View style={{ width: 40, height: 4, borderRadius: 10, backgroundColor: currentStep == 1 ? "#2E70FF" : "#DDDDDD" }}></View>
                    <View style={{ width: 40, height: 4, borderRadius: 10, backgroundColor: currentStep == 2 ? "#2E70FF" : "#DDDDDD" }}></View>
                </View>


                <TouchableOpacity onPress={() => setShowModel(true)} style={{ width: "100%", marginTop: 30, justifyContent: "center", alignItems: "center", backgroundColor: "#2E70FF", height: 45, borderRadius: 10 }}>
                    <Text style={{ color: "white", fontSize: 15 }}>Get Started</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{router.push("/auth")}} style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", gap: 5, marginTop: 20 }}>
                    <Text style={{ color: "#DDDDDD" }}>Already a member? <Text style={{ color: "#2E70FF" }}>Login</Text> </Text>
                </TouchableOpacity>

            </View>

            {
                showModel && (
                    <Pressable onPress={() => setShowModel(false)} style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


                        <View style={{ backgroundColor: "#E6EEFF", padding: 30, width: Dimensions.get("screen").width, height: 250, borderTopStartRadius: 30, borderTopEndRadius: 30 }}>

                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: -60 }}>
                                <View style={{ width: 70, height: 70, justifyContent: "center", alignItems: "center", backgroundColor: "#E6EEFF", borderRadius: 1000 }}>
                                    <Image source={logo} style={{ width: 45, height: 32 }} />
                                </View>
                                <TouchableOpacity onPress={()=>{handleRegistration("customer")}} style={{ marginTop: 10, backgroundColor: "#CCD6FF", width: "100%", height: 55, alignItems: "center", flexDirection: "row", paddingHorizontal: 20, borderRadius: 10 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", width: 35, height: 35, backgroundColor: "#B3C0FF", borderRadius: 10, marginRight: 10 }}>
                                        <FontAwesome5 name="user" size={15} color="white" />
                                    </View>
                                    <Text style={{ fontSize: 15 }}>As a Customer</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{handleRegistration("driver")}} style={{ marginTop: 10, backgroundColor: "#2669FF", width: "100%", height: 55, alignItems: "center", flexDirection: "row", paddingHorizontal: 20, borderRadius: 10 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", width: 35, height: 35, backgroundColor: "#4083FF", borderRadius: 10, marginRight: 10 }}>
                                        <AntDesign name="car" size={15} color="white" />
                                    </View>
                                    <Text style={{ fontSize: 15,color:"#fff" }}>As a Driver</Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                    </Pressable>
                )
            }


        </View>

    )
}

export default Onboarding