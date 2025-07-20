import {
  SquareUser,
  Calendar,
  Building,
  GraduationCap,
  Images,
  Star
} from "lucide-react-native";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
const tabs = [
  { id: 1, name: "Profile", icon: SquareUser },
  { id: 2, name: "Events", icon: Calendar },
  { id: 3, name: "Businesses", icon: Building },
  { id: 4, name: "Students", icon: Star },
  { id: 5, name: "Image Gallery", icon: Images },
];

export default function Dashboard({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Welcome back,</Text>
      <Text style={styles.name}>Admin - Rohit Kumar</Text>
      <TextInput
        placeholder="Search events or businesses"
        style={styles.search}
      />

      <Text style={styles.sectionTitle}></Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
            <View style={styles.tabCard}>
              <View style={styles.avatar}>
                <item.icon size={20} color="#4C5DF4" />
              </View>
              <Text style={styles.tabName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Latest Notification</Text>
      <View style={styles.institutionCard}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740",
          }}
          style={{ width: 80, height: 80 }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.institutionName}>
            Tech Innovators Summit 2024
          </Text>
          <Text style={styles.course}>Category: Educational Conference</Text>
          <Text style={styles.description}>
            A gathering of top minds in technology and education to discuss
            innovations in learning platforms, AI integration, and student
            empowerment.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  greeting: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  name: { fontSize: 16, color: "#555" },
  search: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  tabCard: {
    width: 120,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ccc",
    marginBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "10px"
  },
  
  tabName: { fontWeight: "600", textAlign: "center" },
  subject: { color: "#777", fontSize: 12 },
  institutionCard: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    marginVertical: 10,
  },
  institutionName: { fontWeight: "bold", fontSize: 16 },
  course: { color: "#555", fontSize: 13, marginTop: 2 },
  description: { color: "#777", marginTop: 5, fontSize: 13 },
});
