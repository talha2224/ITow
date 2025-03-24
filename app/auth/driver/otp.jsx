import React, { useState, useRef, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Otp = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    useEffect(() => {
        inputRefs[0].current.focus();
    }, []);

    return (
        <View style={{ flex: 1, paddingTop: 45, paddingHorizontal: 20, backgroundColor: "#fff" }}>
            <TouchableOpacity onPress={() => { router.push("/auth/driver") }} style={{ flexDirection: "row", gap: 6 }}>
                <Entypo name="chevron-left" size={20} color="black" />
                <Text style={{ fontSize: 16 }}>Back</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 25 }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#1E1E1E", borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }}></View>
                <View style={{ flex: 1, height: 4, backgroundColor: "#F8F8F8", borderTopRightRadius: 100, borderBottomRightRadius: 100 }}></View>
            </View>

            <Text style={{ marginTop: 30, fontSize: 20 }}>Verify your email address</Text>
            <Text style={{ color: "#868686", marginTop: 5 }}>Please check your email for the confirmation code we sent</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                {otp.map((digit, index) => (
                    <TextInput key={index}ref={inputRefs[index]}style={{width: 50,height: 50,borderBottomWidth: 1,borderColor: '#ccc',borderRadius: 5,textAlign: 'center',fontSize: 18,}}maxLength={1}keyboardType="numeric" value={digit} onChangeText={(text) => handleOtpChange(text, index)}onKeyPress={(e) => handleKeyPress(e, index)}/>
                ))}
            </View>

            <TouchableOpacity onPress={() => { router.push("/auth/driver/username") }} style={{ backgroundColor: "#2669FF", justifyContent: "center", alignItems: "center", marginTop: 20, height: 50, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Next</Text>
            </TouchableOpacity>

            <Pressable style={{ marginTop: 30, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <Text style={{ color: "#1e1e1e" }}>Resend Code</Text>
            </Pressable>
        </View>
    );
};

export default Otp;