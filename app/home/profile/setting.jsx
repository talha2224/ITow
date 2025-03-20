import { Entypo, Feather, FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Setting = () => {
    const [deleteAccountModel, setdeleteAccountModel] = useState(false)
    const [changePasswordModel, setchangePasswordModel] = useState(false)
    return (
        <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: 45, paddingHorizontal: 20, }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <TouchableOpacity onPress={() => { router.push("/home/profile") }} style={{ flexDirection: "row", gap: 6 }}>
                    <Entypo name="chevron-left" size={20} color="black" />
                    <Text style={{ fontSize: 16 }}>Back</Text>
                </TouchableOpacity>

                <Text>Settings</Text>

                <View></View>

            </View>

            <Text style={{ color: "#727272", marginTop: 40 }}>Advanced setting</Text>

            <Pressable onPress={() => { setchangePasswordModel(true) }} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                <MaterialIcons name="password" size={20} color="black" />
                <Text>Change Password</Text>
            </Pressable>

            <Text style={{ color: "#727272", marginTop: 20 }}>Account Management</Text>



            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                <FontAwesome6 name="user" size={13} color="#989999" />
                <Text>Account Enabled</Text>
            </Pressable>


            <Pressable onPress={() => { setdeleteAccountModel(true) }} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                <FontAwesome6 name="user" size={13} color="#FF3A2F" />
                <Text style={{ color: "#FF3A2F" }}>Delete Account</Text>
            </Pressable>



            {
                deleteAccountModel && (
                    <Pressable style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 240, borderTopEndRadius: 30 }}>


                            <Text style={{ color: "#FF0D00", fontSize: 19 }}>Delete Account?</Text>

                            <Text style={{ marginTop: 10, color: "#727272" }}>Sed ut perspiciatis unde omnis iste natus error</Text>



                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 10 }}>

                                <Pressable onPress={() => { setdeleteAccountModel(false) }} style={{ flex: 1, borderWidth: 1, borderColor: "#DDDDDD", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                                    <Text>Cancel</Text>
                                </Pressable>

                                <Pressable onPress={() => { setdeleteAccountModel(false) }} style={{ flex: 1, backgroundColor: "#FF0D00", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                                    <Text style={{ color: "#fff" }}>Delete</Text>
                                </Pressable>


                            </View>





                        </View>


                    </Pressable>
                )
            }

            {
                changePasswordModel && (
                    <Pressable style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


                        <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 390, borderTopEndRadius: 30 }}>


                            <Text style={{ fontSize: 19 }}>Change Password</Text>

                            <Text style={{ marginTop: 10, color: "#727272" }}>Sed ut perspiciatis unde omnis iste natus error</Text>

                            <TextInput placeholder='Old Password' style={{ marginTop: 10, paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }} />
                            <TextInput placeholder='New Password' style={{ marginTop: 10, paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }} />
                            <TextInput placeholder='Confirm New Password' style={{ marginTop: 10, paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }} />




                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 10 }}>

                                <Pressable onPress={() => { setchangePasswordModel(false) }} style={{ flex: 1, borderWidth: 1, borderColor: "#DDDDDD", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                                    <Text>Cancel</Text>
                                </Pressable>

                                <Pressable onPress={() => { setchangePasswordModel(false) }} style={{ flex: 1, backgroundColor: "#2669FF", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                                    <Text style={{ color: "#fff" }}>Save</Text>
                                </Pressable>


                            </View>





                        </View>


                    </Pressable>
                )
            }




        </View>
    )
}

export default Setting