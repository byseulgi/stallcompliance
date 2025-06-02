import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profilePicPlaceholder}>
        <Text style={styles.initials}>MM</Text>
      </View>

      <Text style={styles.name}>Mac Miller</Text>
      <Text style={styles.email}>mac.miller@example.com</Text>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Role</Text>
        <Text style={styles.info}>Inspector</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Inspector ID</Text>
        <Text style={styles.info}>INS-123456</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.info}>+1 234 567 8901</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    flexGrow: 1,
  },
  profilePicPlaceholder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  initials: {
    color: "white",
    fontSize: 56,
    fontWeight: "bold",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 6,
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  infoSection: {
    width: "100%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: "#999",
    marginBottom: 6,
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#333",
  },
  editButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  editButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
