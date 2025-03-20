import React, { useState } from 'react'
import { Dimensions, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import CarImage from '../../assets/images/home/car.png'
import Logo from '../../assets/images/logo.png'
import Profile from '../../assets/images/home/profile.png'
import Mastercard from '../../assets/images/home/mastercard.png'
import Tick from '../../assets/images/home/tick.png'
import { AntDesign, Entypo,Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import BottomNavBar from '../../components/BottomNavBar'

const Request = () => {

    const [requestModel, setRequestModel] = useState(false);
    const [paymentModel, setPaymentModel] = useState(false);
    const [addCreditCard, setAddCreditCard] = useState(false);
    const [alertModel, setAlertModel] = useState(false)


    return (
        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>

                <Image source={CarImage} style={{ zIndex: -20 }} />

                <Pressable onPress={() => router.push("/home/map")} style={{ position: "absolute", top: 40, width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

                    <View style={{ backgroundColor: "#fff", width: 35, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 100, marginLeft: 20 }}>
                        <Ionicons name="chevron-back" size={20} color="#2669FF" />
                    </View>

                    <Image source={Logo} style={{ width: 44, height: 30, marginRight: 20 }} />


                </Pressable>


                <Pressable onPress={() => router.push("/home/map")} style={{ backgroundColor: "#F7FAFFF", position: "absolute", top: 280, width: "100%", gap: 10, alignItems: "center", flexDirection: "row" }}>


                    <Image source={Profile} style={{ marginLeft: 20 }} />

                    <View>
                        <Text style={{ color: "#fff" }}>Luke James</Text>
                        <View style={{ marginTop: 2, flexDirection: "row", alignItems: "center", gap: 5 }}>
                            <Entypo name="location-pin" size={20} color="white" />
                            <Text style={{ color: "#f9f9f9" }}>Albany, New York</Text>
                        </View>
                    </View>


                </Pressable>


                <ScrollView style={{ width: "100%", backgroundColor: "#fff", paddingHorizontal: 20, paddingVertical: 25, paddingBottom: 70 }}>


                    <View style={{ backgroundColor: "#F7FAFF", width: "100%", paddingVertical: 6, paddingHorizontal: 20, flexDirection: "row", alignItems: "center", gap: 5, borderRadius: 10 }}>
                        <Ionicons name="alert-circle" size={20} color="#2669FF" />
                        <Text style={{ color: "#727272" }}>Before requesting for services, Please always check for drivers information</Text>
                    </View>


                    <View style={{ borderColor: "#DAE5FF", borderWidth: 1, paddingVertical: 10, borderRadius: 10, marginTop: 20 }}>

                        <View style={{ marginHorizontal: 10, backgroundColor: "#E1F7E6", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 80 }}>
                            <View style={{ width: 8, height: 8, backgroundColor: "#34C759", borderRadius: 100 }}></View>
                            <Text style={{ fontSize: 13 }}>Available</Text>
                        </View>


                        <View style={{ marginHorizontal: 10, justifyContent: "space-between", alignItems: "center", marginTop: 5, flexDirection: "row" }}>
                            <Text>Towly Ltd</Text>
                            <Text>$800/8  m/h</Text>
                        </View>

                        <View style={{ marginHorizontal: 10, justifyContent: "space-between", alignItems: "center", marginTop: 5, flexDirection: "row" }}>
                            <Text style={{ color: "#727272" }}>Towing services</Text>
                            <Text style={{ color: "#2669FF" }}>ETA - 40mins</Text>
                        </View>

                        <View style={{ marginHorizontal: 10, marginBottom: 10, justifyContent: "space-between", alignItems: "center", marginTop: 10, flexDirection: "row" }}>

                            <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5, width: 80 }}>
                                <Text style={{ fontSize: 13 }}>Chevrolet</Text>
                            </View>

                            <Text style={{ color: "#FF9500" }}>200 Jobs done</Text>

                        </View>

                        <View style={{ height: 1, width: "100%", backgroundColor: "#DAE5FF" }}></View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginHorizontal: 10, alignItems: "center", marginTop: 10, flexDirection: "row", gap: 5 }}>

                            <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <AntDesign name="car" size={15} color="#FFCC00" />
                                <Text style={{ fontSize: 13 }}>Wheel Lift</Text>
                            </View>

                            <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <AntDesign name="car" size={15} color="#007AFF" />
                                <Text style={{ fontSize: 13 }}>Boom Truck</Text>
                            </View>

                            <View style={{ borderWidth: 1, borderColor: "#DAE5FF", marginRight: 20, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <AntDesign name="car" size={15} color="#FF3B30" />
                                <Text style={{ fontSize: 13 }}>Heavy-Duty</Text>
                            </View>
                        </ScrollView>



                    </View>


                    <Text style={{ marginTop: 10, color: "#727272" }}>Ratings & Reviews</Text>


                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>5.0</Text>
                        <View>
                            <Text>20 reviews</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                                <AntDesign name="star" size={15} color="#F8BD00" />
                                <AntDesign name="star" size={15} color="#F8BD00" />
                                <AntDesign name="star" size={15} color="#F8BD00" />
                                <AntDesign name="star" size={15} color="#F8BD00" />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <Text>5</Text>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderTopLeftRadius: 100, borderBottomStartRadius: 100, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: "#F8BD00" }}></View>
                        </View>
                        <Text>100%</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <Text>4</Text>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderTopLeftRadius: 100, borderBottomStartRadius: 100, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: "#DFDFE7" }}></View>
                        </View>
                        <Text>80%</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <Text>3</Text>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderTopLeftRadius: 100, borderBottomStartRadius: 100, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: "#DFDFE7" }}></View>
                        </View>
                        <Text>40%</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <Text>2</Text>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderTopLeftRadius: 100, borderBottomStartRadius: 100, backgroundColor: "#F8BD00" }}></View>
                            <View style={{ flex: 1, height: 4, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: "#DFDFE7" }}></View>
                        </View>
                        <Text>20%</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <Text>1</Text>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 1, height: 4, borderRadius: 100, backgroundColor: "#DFDFE7" }}></View>
                        </View>
                        <Text>0%</Text>
                    </View>

                    {
                        [1, 2]?.map((i) => (
                            <View key={i} style={{ marginTop: 20, borderBottomWidth: 1, borderBottomColor: "#DFDFE7", paddingBottom: 20 }}>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <Image source={Profile} style={{ width: 30, height: 30 }} />
                                        <View>
                                            <Text>Kate Chris</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                                                <AntDesign name="star" size={15} color="#F8BD00" />
                                                <Text style={{ color: "#727272" }}>4.0</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ borderWidth: 1, borderColor: "#DAE5FF", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 100, flexDirection: "row", alignItems: "center", gap: 5 }}>
                                        <AntDesign name="car" size={15} color="#007AFF" />
                                        <Text style={{ fontSize: 13 }}>Boom Truck</Text>
                                    </View>


                                </View>

                                <Text style={{ color: "#727272", marginTop: 10 }}>Amazing guy !</Text>

                            </View>
                        ))
                    }

                </ScrollView>


            </ScrollView>

            <Pressable onPress={() => setRequestModel(true)} style={{ position: "absolute", marginHorizontal: 20, width: "90%", bottom: 70, backgroundColor: "#2669FF", height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 20 }}><Text style={{ color: "white" }}>Request Services</Text></Pressable>



            {
                requestModel && (
                    <Pressable onPress={() => setRequestModel(false)} style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 350, borderTopEndRadius: 30 }}>

                            <Text style={{ fontSize: 18 }}>Add Destination</Text>

                            <Text style={{ color: "#727272", marginTop: 10 }}>Your pick-up & drop-off location</Text>

                            <TextInput placeholderTextColor={"#727272"} placeholder='Pick-up location' style={{ backgroundColor: "#F7F7F7", marginTop: 10, borderRadius: 5, paddingHorizontal: 10 }} />
                            <TextInput placeholderTextColor={"#727272"} placeholder='Drop-off location' style={{ backgroundColor: "#F7F7F7", marginTop: 10, borderRadius: 5, paddingHorizontal: 10 }} />

                            <Pressable onPress={() => { setPaymentModel(true); setRequestModel(false) }} style={{ width: "100%", backgroundColor: "#2669FF", height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 20 }}><Text style={{ color: "white" }}>Next</Text></Pressable>

                            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", gap: 5, marginTop: 20 }}>
                                <Ionicons name="alert-circle" size={20} color="#2669FF" />
                                <Text style={{ color: "#727272" }}>Lorem ipsum dolor sit amet, consectetur,</Text>
                            </View>


                        </View>


                    </Pressable>
                )
            }

            {
                paymentModel && (
                    <Pressable style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 550, borderTopEndRadius: 30 }}>

                            <Text style={{ fontSize: 18 }}>Add Destination</Text>

                            <Text style={{ color: "#727272", marginTop: 10 }}>Your pick-up & drop-off location</Text>

                            <TextInput value='Aristotle, New York' placeholderTextColor={"#727272"} placeholder='Pick-up location' style={{ backgroundColor: "#F7F7F7", marginTop: 10, borderRadius: 5, paddingHorizontal: 10 }} />
                            <TextInput value='Aristotle, New York' placeholderTextColor={"#727272"} placeholder='Drop-off location' style={{ backgroundColor: "#F7F7F7", marginTop: 10, borderRadius: 5, paddingHorizontal: 10 }} />

                            <Text style={{ marginTop: 10 }}>Payment</Text>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                <Text style={{ color: "#727272" }}>Total</Text>
                                <Text style={{ color: "#2669FF" }}>$800.00</Text>
                            </View>


                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }}>
                                <Image source={Mastercard} />
                                <Text style={{ color: "#000" }}>**** 2025</Text>
                            </View>

                            <Pressable onPress={() => setAddCreditCard(true)} style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }}>
                                <AntDesign name="creditcard" size={20} color="black" />
                                <Text style={{ color: "#000" }}>Add credit card</Text>
                            </Pressable>

                            <TextInput placeholder='Add Notes' style={{ marginTop: 10, paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }} />



                            <Pressable onPress={() => { setPaymentModel(false);setAlertModel(true) }} style={{ width: "100%", backgroundColor: "#2669FF", height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 20 }}><Text style={{ color: "white" }}>Send Request</Text></Pressable>



                        </View>


                    </Pressable>
                )
            }


            {
                addCreditCard && (
                    <Pressable style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 400, borderTopEndRadius: 30 }}>

                            <Text style={{ fontSize: 18 }}>Add credit or debit card</Text>

                            <View style={{ marginTop: 10, backgroundColor: "#F7FAFF", width: "100%", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                                <Text style={{ fontSize: 13 }}>iTow may charge a small amount to confirm your card details. This is immediately refunded.</Text>
                            </View>

                            <Text style={{ marginTop: 10 }}>Card Number</Text>
                            <TextInput placeholderTextColor={"#727272"} placeholder='40864949494490' style={{ marginTop: 10, borderRadius: 5, paddingHorizontal: 10, borderWidth: 1, borderColor: "#DDDDDD" }} />

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10,gap:10 }}>
                                
                                <View style={{flex:1}}>
                                    <Text>Expiry date</Text>
                                    <TextInput placeholderTextColor={"#727272"} placeholder='DD/MM' style={{ marginTop: 10, borderRadius: 5, paddingHorizontal: 10, borderWidth: 1, borderColor: "#DDDDDD" }} />
                                </View>

                                <View style={{flex:1}}>
                                    <Text>Secure Code</Text>
                                    <TextInput placeholderTextColor={"#727272"} placeholder='XXX' style={{ marginTop: 10, borderRadius: 5, paddingHorizontal: 10, borderWidth: 1, borderColor: "#DDDDDD" }} />
                                </View>
                                
                                
                            </View>

                            <Pressable onPress={() => { setPaymentModel(true);setAddCreditCard(false) }} style={{ width: "100%", backgroundColor: "#2669FF", height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 20 }}><Text style={{ color: "white" }}>Add card</Text></Pressable>


                        </View>


                    </Pressable>
                )
            }

            {
                alertModel && (
                    <View style={{position:"absolute",marginLeft:20,top:40,width:"90%",backgroundColor:"white",paddingVertical:10,paddingHorizontal:10,flexDirection:"row",gap:5,alignItems:"center",justifyContent:"space-between",borderRadius:10}}>
                        
                        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                            <Image source={Tick}/>
                            <View>
                                <Text>Request Sent </Text>
                                <Text style={{fontSize:12,color:"#727272"}}>You will be notified for acceptance </Text>
                            </View>
                        </View>

                        <Pressable onPress={()=>{setAlertModel(false);router.push("/home")}}><Text>Dismiss</Text></Pressable>
                    
                    </View>
                )
            }


            {(!requestModel && !paymentModel && !addCreditCard) && <BottomNavBar />}

        </View>
    )
}

export default Request