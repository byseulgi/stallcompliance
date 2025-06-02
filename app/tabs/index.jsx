import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [activity, setActivity] = useState([
    {
      id: "1",
      violationName: "Report #101 submitted",
      date: "2025-06-01",
      stallId: "S001",
      inspector: "Mac Miller",
      remarks: "All good",
    },
    {
      id: "2",
      violationName: "Violation #45 resolved",
      date: "2025-06-01",
      stallId: "S002",
      inspector: "Mac Miller",
      remarks: "Resolved quickly",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const [violationName, setViolationName] = useState("");
  const [stallId, setStallId] = useState("");
  const [remarks, setRemarks] = useState("");

  const inspector = "Mac Miller";

  const getNextReportId = () => (activity.length + 1).toString();

  const getCurrentDate = () => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  };

  const handleSubmitPress = () => {
    if (!violationName.trim() || !stallId.trim() || !remarks.trim()) {
      Alert.alert("Validation", "Please fill in all fields.");
      return;
    }

    Alert.alert(
      "Confirm Submission",
      `Are you sure you want to submit this report?\n\nViolation: ${violationName}\nStall ID: ${stallId}`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes, Submit",
          onPress: () => addNewReport(),
        },
      ]
    );
  };

  const addNewReport = () => {
    const newReport = {
      id: getNextReportId(),
      violationName,
      date: getCurrentDate(),
      stallId,
      inspector,
      remarks,
    };

    setActivity([newReport, ...activity]);

    setViolationName("");
    setStallId("");
    setRemarks("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.header}>Daily Reports</Text>

        {/* Daily Reports Cards */}
        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Violations</Text>
            <Text style={styles.cardValue}>12</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Reports</Text>
            <Text style={styles.cardValue}>34</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Stallholders</Text>
            <Text style={styles.cardValue}>87</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Complaints</Text>
            <Text style={styles.cardValue}>5</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.subHeader}>Recent Activity</Text>
        <FlatList
          data={activity}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <View>
                <Text style={styles.activityTitle}>{item.violationName}</Text>
                <Text style={styles.activityDetails}>
                  Date: {item.date} | Stall ID: {item.stallId} | Report ID: {item.id}
                </Text>
                <Text style={styles.activityDetails}>
                  Inspector: {item.inspector}
                </Text>
                <Text style={styles.activityRemarks}>Remarks: {item.remarks}</Text>
              </View>
            </View>
          )}
          style={{ marginBottom: 20 }}
          scrollEnabled={false} // Disable FlatList scrolling because ScrollView handles it
        />

        {/* Add Report Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Add New Report</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal Form */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Submit New Report</Text>

            <TextInput
              style={styles.input}
              placeholder="Violation Name"
              value={violationName}
              onChangeText={setViolationName}
            />

            <TextInput
              style={styles.input}
              placeholder="Stall ID"
              value={stallId}
              onChangeText={setStallId}
            />

            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Remarks"
              value={remarks}
              onChangeText={setRemarks}
              multiline
            />

            <Text style={styles.autoInfo}>Date: {getCurrentDate()}</Text>
            <Text style={styles.autoInfo}>Report ID: {getNextReportId()}</Text>
            <Text style={styles.autoInfo}>Inspector: {inspector}</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalButtonText, { color: "#333" }]}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#007bff" }]}
                onPress={handleSubmitPress}
              >
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    paddingTop: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
    color: "#333",
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  activityItem: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
  activityDetails: {
    fontSize: 12,
    color: "#555",
  },
  activityRemarks: {
    fontSize: 12,
    color: "#777",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  autoInfo: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
