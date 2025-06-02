import {Text,View, StyleSheet,TouchableOpacity,FlatList  ,} from "react-native";
import { useState } from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function Reports() {
  const [selectedType, setSelectedType] = useState("All");

  const reports = [
    {
      violation: "Expired Permit Sanitation",
      date: "2025-06-01",
      reportId: "RPT-001",
      stallId: "ST-045",
      inspectorId: "INS-102",
      remarks: "Permit expired last month.",
      type: "Expired Permit",
      severity: "high",
    },
    {
      violation: "No Health Clearance",
      date: "2025-05-28",
      reportId: "RPT-002",
      stallId: "ST-021",
      inspectorId: "INS-087",
      remarks: "No valid health clearance.",
      type: "Health Clearance",
      severity: "medium",
    },
    {
      violation: "Unclean Stall Area",
      date: "2025-05-25",
      reportId: "RPT-003",
      stallId: "ST-010",
      inspectorId: "INS-015",
      remarks: "Area needs sanitation.",
      type: "Sanitation",
      severity: "low",
    },
    {
      violation: "Expired Permit Document",
      date: "2025-05-22",
      reportId: "RPT-004",
      stallId: "ST-039",
      inspectorId: "INS-130",
      remarks: "Expired permit found during inspection.",
      type: "Expired Permit",
      severity: "high",
    },
  ];

  const filteredReports =
    selectedType === "All"
      ? reports
      : reports.filter((r) => r.type === selectedType);

  const getSeverityColor = (level) => {
    switch (level) {
      case "high":
        return "#ff4d4d";
      case "medium":
        return "#ffa726";
      case "low":
        return "#4caf50";
      default:
        return "#ccc";
    }
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <Text style={styles.header}>Compliance History</Text>

      <View style={styles.filterRow}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setSelectedType("All")}
        >
          <Text
            style={[
              styles.filterText,
              selectedType === "All" && styles.selectedText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() =>
            setSelectedType((prev) =>
              prev === "Expired Permit" ? "All" : "Expired Permit"
            )
          }
        >
          <Text
            style={[
              styles.filterText,
              selectedType === "Expired Permit" && styles.selectedText,
            ]}
          >
            Expired Permit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Report Cards */}
      <FlatList
        data={filteredReports}
        keyExtractor={(item) => item.reportId}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.violationRow}>
              <FontAwesome5
                name="exclamation-circle"
                size={16}
                color={getSeverityColor(item.severity)}
              />
              <Text
                style={[
                  styles.violation,
                  { color: getSeverityColor(item.severity) },
                ]}
              >
                {item.violation}
              </Text>
            </View>

            <Text style={styles.date}>{item.date}</Text>

            <View style={styles.detailRow}>
              <MaterialIcons name="assignment" size={16} color="#555" />
              <Text style={styles.detailText}>
                Report ID: {item.reportId}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <MaterialIcons name="storefront" size={16} color="#555" />
              <Text style={styles.detailText}>Stall ID: {item.stallId}</Text>
            </View>
            <View style={styles.detailRow}>
              <MaterialIcons name="badge" size={16} color="#555" />
              <Text style={styles.detailText}>
                Inspector ID: {item.inspectorId}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <MaterialIcons name="comment" size={16} color="#555" />
              <Text style={styles.detailText}>Remarks: {item.remarks}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  filterButton: {
    backgroundColor: "#ddd",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: "#333",
  },
  selectedText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  violationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 8,
  },
  violation: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#888",
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#333",
  },
});
