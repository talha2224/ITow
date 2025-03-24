import React, { useState } from 'react';
import { Image, Pressable, ScrollView, View, Text } from 'react-native';
import MapImage from '../../assets/images/home/map.png';
import Logo from '../../assets/images/logo.png';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Details = () => {
    const [step, setStep] = useState(0)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <Image source={MapImage} style={{ height: 450 }} />
                </View>

                <Pressable onPress={() => router.push('/driver')} style={{ position: 'absolute', top: 40, width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                    <View style={{ backgroundColor: '#fff', width: 35, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginLeft: 20, }}>
                        <Ionicons name="chevron-back" size={20} color="#2669FF" />
                    </View>
                    <Image source={Logo} style={{ width: 44, height: 30, marginRight: 20 }} />
                </Pressable>

                <View style={{ backgroundColor: '#FFEFD5', padding: 15, marginHorizontal: 20, marginTop: 20, borderRadius: 8, flexDirection: 'row', alignItems: 'center', }}>
                    <Entypo name="warning" size={24} color="#FF9500" style={{ marginRight: 10 }} />
                    <Text style={{ color: '#FF9500', flex: 1 }}>{step===0?"Payment will be made when customer accepts your service.":"You’ve arrived at the pick-up location"}</Text>
                </View>

                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <MaterialIcons name="gps-fixed" size={20} color="#2669FF" style={{ marginRight: 10 }} />
                        <Text>Aristotle, New York</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="location-pin" size={20} color="#FF9500" style={{ marginRight: 10 }} />
                        <Text>Swan, New York</Text>
                    </View>
                </View>

                {
                    step === 0 && (
                        <Pressable onPress={() => setStep(1)} style={{ backgroundColor: '#2669FF', padding: 15, marginHorizontal: 20, marginTop: 20, borderRadius: 8, alignItems: 'center', }}>
                            <Text style={{ color: 'white' }}>Start Ride</Text>
                        </Pressable>
                    )
                }

                {
                    step === 1 && (
                        <Pressable onPress={() => setStep(2)} style={{ backgroundColor: '#2669FF', padding: 15, marginHorizontal: 20, marginTop: 20, borderRadius: 8, alignItems: 'center', }}>
                            <Text style={{ color: 'white' }}>Proceed to drop-off</Text>
                        </Pressable>
                    )
                }

                {
                    step === 2 && (
                        <Pressable onPress={() => router.push("/driver")} style={{ backgroundColor: '#2669FF', padding: 15, marginHorizontal: 20, marginTop: 20, borderRadius: 8, alignItems: 'center', }}>
                            <Text style={{ color: 'white' }}>Request payment</Text>
                        </Pressable>
                    )
                }


                <View style={{ marginBottom: 150 }}></View>
            </ScrollView>
        </View>
    );
};

export default Details;