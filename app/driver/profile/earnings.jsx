import GraphImage from '../../../assets/images/home/graph.png'
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Earnings = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFFF', paddingTop: 50 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
        <TouchableOpacity onPress={()=>router.push("/driver/profile")}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18 , marginLeft: 10 }}>Earnings</Text>
      </View>

      <View style={{ backgroundColor: '#E8E4F8', padding: 20, marginHorizontal: 20, borderRadius: 12, marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: '#6750A4', marginBottom: 5 }}>Wallet Balance</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 28 , color: '#1C1B1F' }}>$6,400.45</Text>
          <MaterialCommunityIcons name="eye-outline" size={20} color="#6750A4" style={{ marginLeft: 5 }} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20 }}>
        <View style={{ backgroundColor: '#fff', padding: 15, borderRadius: 8, width: '48%' }}>
          <Text style={{ fontSize: 14, color: '#6750A4', marginBottom: 5 }}>Active Loan</Text>
          <Text style={{ fontSize: 18 , color: '#1C1B1F' }}>$4,400</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>14 days</Text>
        </View>
        <View style={{ backgroundColor: '#fff', padding: 15, borderRadius: 8, width: '48%' }}>
          <Text style={{ fontSize: 14, color: '#6750A4', marginBottom: 5 }}>Active Lending</Text>
          <Text style={{ fontSize: 18 , color: '#1C1B1F' }}>$410</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>7 days left</Text>
        </View>
      </View>

      <TouchableOpacity style={{ backgroundColor: '#E9F0FF', padding: 15, marginHorizontal: 20, borderRadius: 118, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <MaterialCommunityIcons name="bank-transfer-out" size={24} color="#6750A4" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16 , color: '#6750A4' }}>Withdraw</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 16 , paddingHorizontal: 20, marginBottom: 10 }}>Transactions</Text>

      <View style={{ backgroundColor: '#fff', padding: 15, marginHorizontal: 20, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="#6750A4" style={{ marginRight: 10 }} />
          <View>
            <Text style={{ fontSize: 16 , color: '#1C1B1F' }}>Towing services</Text>
            <Text style={{ fontSize: 12, color: '#79747E' }}>Towing services</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 16 , color: '#2CC531' }}>$800</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>02:30 AM - 03:00 PM</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 15, marginHorizontal: 20, borderRadius: 8, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ fontSize: 16 , color: '#1C1B1F' }}>Transactions Summary</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: '#6750A4', marginRight: 5 }}>Month</Text>
            <MaterialCommunityIcons name="chevron-down" size={20} color="#6750A4" />
          </View>
        </View>
        <Image source={GraphImage} style={{ width: '100%', height: 200, resizeMode: 'contain' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Jan</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Feb</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Mar</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Apr</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>May</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Jun</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Jul</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Aug</Text>
          <Text style={{ fontSize: 12, color: '#79747E' }}>Sep</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Earnings;