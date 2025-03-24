import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import gallery from '../../../assets/images/auth/gallery.png';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,4],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const uploadPhoto = () => {
        if (selectedImage) {
            router.push('/driver');
        } 
        else {
            console.log("no image selected")
        }
    };

    return (
        <View style={{ flex: 1, paddingTop: 45, paddingHorizontal: 20, backgroundColor: '#fff' }}>
            
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {router.push('/auth/driver/username');}}style={{ flexDirection: 'row' }}>
                    <Entypo name="chevron-left" size={20} color="black" />
                    <Text style={{ fontSize: 16, marginTop: -1 }}>Back</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16 }}>Upload Profile Photo</Text>
                <View></View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <View style={{ flex: 1, height: 4, backgroundColor: '#1E1E1E', borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }}></View>
            </View>

            <TouchableOpacity onPress={pickImage} style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', height: 300, backgroundColor: '#F3F3F3', borderRadius: 30 }}>
                {selectedImage ? (<Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%', borderRadius: 30 }} />) 
                : (<Image source={gallery} />)}
            </TouchableOpacity>

            <TouchableOpacity onPress={uploadPhoto} style={{ backgroundColor: '#2669FF', justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 50, borderRadius: 10 }}>
                <Text style={{ color: '#fff' }}>Upload Photo</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Profile;