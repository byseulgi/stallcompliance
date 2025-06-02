import { Platform,View,Image,StyleSheet } from "react-native";
import { Link, Slot, Tabs } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";



export default function TabLayout() {
  if (Platform.OS === "web") {
    return (
      <div style={{ flex: 1 }}>
        <header>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </header>
        <Slot />
      </div>
    );
  }

  // as

  return (

    <SafeAreaView style={{ flex: 1 }}>
      
      {/* Blue Top Bar with Logo */}
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/images/digistall.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#blue",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
  name="book"
  solid={focused} 
  size={24}
  color={color}
/>

          ),
        }}
      />
      <Tabs.Screen
        name="stalls"
        options={{
          title: "Stalls",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
  name="store"
  solid={focused} 
  size={24}
  color={color}
/>
          ),
        }}
      /> 
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
  name="user"
  solid={focused} 
  size={24}
  color={color}
/>

          ),
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          title: "Users",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
    </SafeAreaView>
    
  );
  
}
const styles = StyleSheet.create({
  topBar: {
    height: 50, // Increased height for logo
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: -10,
  },
  logo: {
    width: 150,
    height: 40,
    
  },
  webHeader: {
    padding: 10,
    backgroundColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});



