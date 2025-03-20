import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import GoogleLogo from '../../assets/images/auth/google.png'
import AppleLogo from '../../assets/images/auth/apple.png'

const Login = () => {
    return (

        <View style={{ flex: 1, paddingTop: 45, paddingHorizontal: 20, backgroundColor: "#fff" }}>


            <TouchableOpacity onPress={() => { router.push("/onboarding") }} style={{ flexDirection: "row", gap: 6 }}>
                <Entypo name="chevron-left" size={20} color="black" />
                <Text style={{ fontSize: 16 }}>Back</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 30, fontSize: 20 }}>Welcome Back 👋</Text>
            <Text style={{ color: "#868686", marginTop: 5 }}>Enter your details to access your account</Text>

            <TextInput placeholderTextColor={"#989999"} placeholder='Email' style={{ backgroundColor: "#FBFBFB", height: 50, marginTop: 20, paddingHorizontal: 20, borderRadius: 10 }} />
            <TextInput secureTextEntry placeholderTextColor={"#989999"} placeholder='Password' style={{ backgroundColor: "#FBFBFB", height: 50, marginTop: 10, paddingHorizontal: 20, borderRadius: 10 }} />

            <TouchableOpacity onPress={()=>router.push("/home")} style={{ backgroundColor: "#2669FF", justifyContent: "center", alignItems: "center", marginTop: 20, height: 50, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Login</Text>
            </TouchableOpacity>

            <View style={{ marginTop: 30, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <View style={{ height: 2, flex: 1, backgroundColor: "#FFF3F1" }}></View>
                <Text style={{ color: "#989999" }}>Or</Text>
                <View style={{ height: 2, flex: 1, backgroundColor: "#FFF3F1" }}></View>
            </View>


            <TouchableOpacity style={{ backgroundColor: "#FBFBFB",flexDirection:"row",justifyContent: "center", alignItems: "center",gap:8, marginTop: 20, height: 50, borderRadius: 10 }}>
                <Image source={GoogleLogo} />
                <Text>Continue With Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "#FBFBFB",flexDirection:"row",justifyContent: "center", alignItems: "center",gap:8, marginTop: 10, height: 50, borderRadius: 10 }}>
                <Image source={AppleLogo} />
                <Text>Continue With Apple</Text>
            </TouchableOpacity>



        </View>

    )
}

export default Login