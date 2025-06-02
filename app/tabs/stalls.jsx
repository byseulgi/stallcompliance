import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Stalls() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const stallData = [
    {
      id: 1,
      name: "Meat Stall",
      number: "Stall #122",
      status: "Compliant",
      location: "Ground 2, Meat Section",
      owner: "Lil Uzi Vert",
      description: "Sells fresh meat and poultry daily.",
      image: require("../../assets/images/sample-stall.jpg"),
    },
    {
      id: 2,
      name: "Cookie Corner",
      number: "Stall #45",
      status: "Non-Compliant",
      location: "Near Exit A",
      owner: "Boa",
      description: "Freshly baked cookies",
      image: require("../../assets/images/sample-stall.jpg"),
    },
    // Add more data...
  ];

  // Filter logic
  const filteredStalls = stallData.filter((stall) => {
    const matchSearch = stall.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "ALL" ||
      (filter === "COMPLIANT" && stall.status === "Compliant") ||
      (filter === "NON-COMPLIANT" && stall.status === "Non-Compliant");

    return matchSearch && matchFilter;
  });

  return (
    <View style={styles.container}>
      {/* Header + Search */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Stalls</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterRow}>
        {["ALL", "COMPLIANT", "NON-COMPLIANT"].map((f) => (
          <TouchableOpacity
            key={f}
            style={[
              styles.filterButton,
              filter === f && styles.activeFilter,
            ]}
            onPress={() => setFilter(f)}
          >
            <Text
              style={[
                styles.filterText,
                filter === f && styles.activeFilterText,
              ]}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

     
      <ScrollView style={styles.scrollArea}>
        {filteredStalls.map((stall) => (
          <View key={stall.id} style={styles.card}>
            <Image source={stall.image} style={styles.image} />
            <View style={styles.info}>
              <View style={styles.topRow}>
                <View>
                  <Text style={styles.name}>{stall.name}</Text>
                  <Text style={styles.stallNumber}>{stall.number}</Text>
                </View>
                <View
                  style={[
                    styles.statusBadge,
                    stall.status === "Compliant"
                      ? styles.compliant
                      : styles.nonCompliant,
                  ]}
                >
                  <Text style={styles.statusText}>{stall.status}</Text>
                </View>
              </View>

              <Text style={styles.detail}>📍 {stall.location}</Text>
              <Text style={styles.detail}>👤 Owned by {stall.owner}</Text>
              <Text style={styles.description}>{stall.description}</Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>View Stall</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    width: "50%",
    elevation: 2,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#ddd",
    borderRadius: 20,
  },
  filterText: {
    fontWeight: "600",
    color: "#555",
  },
  activeFilter: {
    backgroundColor: "#007bff",
  },
  activeFilterText: {
    color: "#fff",
  },
  scrollArea: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 12,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  stallNumber: {
    fontSize: 14,
    color: "#888",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  compliant: {
    backgroundColor: "#d4edda",
  },
  nonCompliant: {
    backgroundColor: "#f8d7da",
  },
  statusText: {
    fontWeight: "600",
    color: "#333",
  },
  detail: {
    fontSize: 14,
    marginTop: 4,
    color: "#444",
  },
  description: {
    fontSize: 13,
    marginTop: 8,
    color: "#666",
    fontStyle: "italic",
  },
  buttonRow: {
    alignItems: "flex-end",
    marginTop: 12,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
