import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, FlatList, Image } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const vehicleOptions = [
    { id: 'truck', name: 'Chevrolet, Truck' },
    { id: 'sedan', name: 'Chevrolet, Sedan' },
    { id: 'suv', name: 'Chevrolet, SUV' },
];
const towTypeOptions = [
    { id: 'wheelLift', name: 'Wheel lift', icon: 'truck-loading' },
    { id: 'boomTruck', name: 'Boom truck', icon: 'truck-pickup' },
    { id: 'heavyDuty', name: 'Heavy Duty', icon: 'truck-monster' },
];

const CreateService = () => {
    const [vehicleModalVisible, setVehicleModalVisible] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [vehicleImage, setVehicleImage] = useState(null);
    const [towTypeModalVisible, setTowTypeModalVisible] = useState(false);
    const [selectedTowType, setSelectedTowType] = useState(null);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setVehicleImage(result.assets[0].uri);
        }
    };
    const navigation = useNavigation();

    const handleBackButtonPress = () => {
      navigation.goBack(); // This will navigate to the previous screen
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 50 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
                <TouchableOpacity onPress={handleBackButtonPress}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, marginLeft: 10 }}>Services Details</Text>
            </View>

            <View style={{ paddingHorizontal: 20 }}>

                <TouchableOpacity style={{ backgroundColor: '#2669FF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 }} onPress={pickImage}>
                    <Text style={{ color: 'white' }}>{vehicleImage ? 'Change Vehicle Photo' : 'Upload Vehicle Photo'}</Text>
                </TouchableOpacity>

                {vehicleImage && (<Image source={{ uri: vehicleImage }} style={{ width: '100%', height: 200, marginBottom: 20, borderRadius: 8 }} />)}

                <Text style={{ fontSize: 16, marginBottom: 20 }}>Details</Text>

                <Text style={{ color: '#1e1e1e', marginBottom: 5 }}>Company Name</Text>
                <TextInput placeholder="e.g. Jake Towing Ltd" style={{ backgroundColor: '#F7F7F7', padding: 12, borderRadius: 5, marginBottom: 10 }} />
                <Text style={{ color: '#1e1e1e', marginBottom: 5 }}>Price Per Miles</Text>
                <TextInput placeholder="$0.00" keyboardType="numeric" style={{ backgroundColor: '#F7F7F7', padding: 12, borderRadius: 5, marginBottom: 10 }} />
                <Text style={{ color: '#1e1e1e', marginBottom: 5 }}>Base Price</Text>
                <TextInput placeholder="$0.00" keyboardType="numeric" style={{ backgroundColor: '#F7F7F7', padding: 12, borderRadius: 5, marginBottom: 10 }} />
                <Text style={{ color: '#1e1e1e', marginBottom: 5 }}>Vehicle Type</Text>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F7F7F7', padding: 12, borderRadius: 5, marginBottom: 10, }} onPress={() => setVehicleModalVisible(true)}>
                    <Text>{selectedVehicle ? selectedVehicle.name : 'Select Type'}</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
                <Text style={{ color: '#1e1e1e', marginBottom: 5 }}>Tow Type</Text>
                <TouchableOpacity onPress={() => setTowTypeModalVisible(true)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F7F7F7', padding: 12, borderRadius: 5, marginBottom: 20, }}>
                    <Text>{selectedTowType?.name ? selectedTowType?.name :"Select Type"}</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>router.push("/driver")} style={{ backgroundColor: '#2669FF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 100 }}>
                    <Text style={{ color: 'white' }}>Create</Text>
                </TouchableOpacity>
            </View>

            {/* Vehicle Selection Modal */}
            <Modal visible={vehicleModalVisible} animationType="slide" transparent={true}>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 25, paddingBottom: 50 }}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>Select vehicle type</Text>
                        <TextInput placeholder="Search for vehicles" style={{ backgroundColor: '#F7F7F7', padding: 10, borderRadius: 5, marginBottom: 15 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                            <TouchableOpacity style={{ padding: 8, borderRadius: 5, backgroundColor: '#2669FF' }}>
                                <Text style={{ color: 'white' }}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 8, borderRadius: 5, backgroundColor: '#F7F7F7' }}>
                                <Text>Truck</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 8, borderRadius: 5, backgroundColor: '#F7F7F7' }}>
                                <Text>Sedan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 8, borderRadius: 5, backgroundColor: '#F7F7F7' }}>
                                <Text>SUV</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 8, borderRadius: 5, backgroundColor: '#F7F7F7' }}>
                                <Text>Wagon</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList data={vehicleOptions} keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' }} onPress={() => { setSelectedVehicle(item); setVehicleModalVisible(false); }}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>

            <Modal visible={towTypeModalVisible} animationType="slide" transparent={true}>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 25, paddingBottom: 50 }}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>Select tow vehicle type</Text>
                        <FlatList
                            data={towTypeOptions}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',paddingVertical: 12,borderBottomWidth: 1,borderBottomColor: '#eee',}} onPress={() => {setSelectedTowType(item);setTowTypeModalVisible(false);}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <FontAwesome5 name={item.icon} size={20} color="#2669FF" style={{ marginRight: 15 }} />
                                        <Text>{item.name}</Text>
                                    </View>
                                    {selectedTowType && selectedTowType.id === item.id && (
                                        <View style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#2669FF', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#2669FF' }} />
                                        </View>
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
};

export default CreateService;