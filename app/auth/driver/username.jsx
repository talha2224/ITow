import { router } from 'expo-router';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../../../assets/images/logo.png'
import { AntDesign, Entypo } from '@expo/vector-icons';

const Username = () => {
    const data = ["8 to 32 characters", "At least on uppercase letter", "At least on lowercase letter", "At least one number", "At least one special character"]

    return (

        <View style={{ flex: 1, paddingTop: 45, paddingHorizontal: 20, backgroundColor: "#fff" }}>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <Image source={logo} style={{ height: 28, width: 40 }} />
                <Text style={{ fontSize: 17 }}>ITOW</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 25 }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#1E1E1E", borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }}></View>
                <View style={{ flex: 1, height: 4, backgroundColor: "#1E1E1E", borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }}></View>
                <View style={{ flex: 1, height: 4, backgroundColor: "#1E1E1E", borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }}></View>
                <View style={{ flex: 1, height: 4, backgroundColor: "#F8F8F8", borderTopRightRadius: 100, borderBottomRightRadius: 100 }}></View>
            </View>

            <Text style={{ marginTop: 30, fontSize: 20 }}>Create an account</Text>
            <Text style={{ color: "#868686", marginTop: 5 }}>Enter your name and create a  password</Text>

            <TextInput placeholderTextColor={"#989999"} placeholder='Username' style={{ backgroundColor: "#FBFBFB", height: 50, marginTop: 20, paddingHorizontal: 20, borderRadius: 10 }} />
            <TextInput placeholderTextColor={"#989999"} placeholder='Password' style={{ backgroundColor: "#FBFBFB", height: 50, marginTop: 10, paddingHorizontal: 20, borderRadius: 10 }} />


            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, marginBottom: 20 }}>
                <View style={{ flex: 1, marginRight: 10, height: 1, backgroundColor: "#4CD9B1" }}></View>
                <View style={{ flex: 1, marginRight: 10, height: 1, backgroundColor: "#4CD9B1" }}></View>
                <View style={{ flex: 1, height: 1, backgroundColor: "#4CD9B1" }}></View>
            </View>

            {
                data?.map((i) => (
                    <View key={i} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <AntDesign name="checkcircle" size={18} color="#4CD9B1" />
                        <Text>{i}</Text>
                    </View>
                ))
            }

            <TouchableOpacity onPress={() => { router.push("/auth/driver/profile") }} style={{ backgroundColor: "#2669FF", justifyContent: "center", alignItems: "center", marginTop: 20, height: 50, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Next</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Username