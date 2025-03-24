import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign, Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';

const BottomDriverNav = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const tabs = [
    { link: "driver/index", name: 'Home', icon: <AntDesign name="home" size={18} color="#989999" />, activeIcon: <AntDesign name="home" size={18} color="#fff" /> },
    { link: "driver/services", name: 'Services', icon: <FontAwesome5 name="car" size={18} color="#989999" />, activeIcon: <FontAwesome5 name="car" size={18} color="#fff" /> },
    { link: "driver/history", name: 'History', icon: <FontAwesome name="tasks" size={15} color="#989999" />, activeIcon: <FontAwesome name="tasks" size={15} color="#fff" /> },
    { link: "driver/profile", name: 'Profile', icon: <FontAwesome6 name="user" size={13} color="#989999" />, activeIcon: <FontAwesome6 name="user" size={13} color="#fff" /> },
  ];

  return (
    <View style={[styles.navContainer, { paddingBottom: insets.bottom }]}>
      <View style={styles.navBar}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.name} style={[styles.navItem, { backgroundColor: route?.name?.includes(tab?.link) && "#2669FF", borderRadius: 100 }]} onPress={() => router.push(tab?.link === "driver/index" ? "driver" : tab?.link)}>
            {route?.name?.includes(tab?.link) ? tab.activeIcon : tab.icon}
            {
              route?.name?.includes(tab?.link) && <Text style={{ textAlign: "center", color: route?.name?.includes(tab?.link) ? "#fff" : "#989999" }}>{tab?.name}</Text>
            }
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    navContainer: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderWidth: 1,
      borderColor: "#DAE5FF"
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
    },
    navItem: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      height: 35,
      flexDirection: "row",
      gap: 5
    },
  });

export default BottomDriverNav