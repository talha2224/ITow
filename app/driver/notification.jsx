import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, Dimensions, Image, Modal, TextInput } from 'react-native';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router'
import Mastercard from '../../assets/images/home/mastercard.png'
import Profile from '../../assets/images/home/profile.png'

const Notification = () => {
    const [detailsModel, setDetailsModel] = useState(false);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 50 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
                <TouchableOpacity onPress={() => router.push("/driver")}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, marginLeft: 10 }}>Notifications</Text>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>New request</Text>

                <Pressable onPress={() => setDetailsModel(true)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F7F7F7', padding: 15, borderRadius: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="truck-fast-outline" size={30} color="black" style={{ marginRight: 15 }} />
                        <View>
                            <Text style={{ fontSize: 16 }}>Towing services</Text>
                            <Text style={{ color: '#727272' }}>Towing services</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: '#2CC531', fontWeight: 'bold' }}>$800</Text>
                        <Text style={{ color: '#727272' }}>02:30 AM - 03:00 PM</Text>
                    </View>
                </Pressable>

            </View>
            <Modal onRequestClose={() => setDetailsModel(false)} visible={detailsModel} animationType="slide" transparent={true}>
                <Pressable onPress={() => setDetailsModel(false)} style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 25, paddingBottom: 50 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                <FontAwesome5 name="truck-loading" size={20} color="black" />
                                <Text>Towing services</Text>
                            </View>
                            <Pressable style={{ backgroundColor: '#2669FF', paddingHorizontal: 10, paddingVertical: 7, borderRadius: 100 }}>
                                <Text style={{ color: '#fff' }}>View Map</Text>
                            </Pressable>
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#DAE5FF', padding: 10, marginTop: 20, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <MaterialIcons name="radar" size={20} color="#2669FF" />
                                    <View>
                                        <Text>Aristotle, New York</Text>
                                        <Text style={{ color: '#727272' }}>Pick-up location</Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, borderColor: '#AEFEBF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}>
                                    <Text style={{ color: '#34C759' }}>$800</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <Entypo name="location-pin" size={20} color="#FF9500" />
                                    <View>
                                        <Text>Swan, New York</Text>
                                        <Text style={{ color: '#727272' }}>Drop-off location</Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, borderColor: '#DDDDDD', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}>
                                    <Text style={{ color: '#000' }}>20m</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                <Image source={Profile} style={{ width: 30, height: 30 }} />
                                <View>
                                    <Text>Luke James</Text>
                                    <Text style={{ color: '#727272' }}>Birdsall, New York</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Chevrolet</Text>
                                <Text style={{ color: '#727272' }}>Wheel lift</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: '#727272' }}>Notes</Text>
                            <TextInput placeholder="He was a friendly and a very nice young man." style={{ marginTop: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: '#DAE5FF', borderRadius: 10 }} />
                        </View>



                        <View style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: '#727272' }}>Discount</Text>
                            <Text>---</Text>
                        </View>
                        <View style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: '#727272' }}>Payment Method</Text>
                            <Image source={Mastercard} />
                        </View>
                        <View style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: '#727272' }}>Date</Text>
                            <Text>12-03-2025</Text>
                        </View>
                        <View style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: '#727272' }}>Request No</Text>
                            <Text>TX - 331401010111114</Text>
                        </View>

                        <View style={{ marginTop: 20, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',gap:10}}>

                            <Pressable onPress={() => {setDetailsModel(false); }} style={{ flex:1,borderWidth:1,borderColor: '#dddd', height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                                <Text>Dismiss</Text>
                            </Pressable>

                            <Pressable onPress={() => { router.push('/driver/details'); }} style={{ flex:1, backgroundColor: '#2669FF', height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                                <Text style={{ color: 'white' }}>Accept</Text>
                            </Pressable>

                        </View>
                    </View>
                </Pressable>
            </Modal>
        </ScrollView>
    );
};

export default Notification;