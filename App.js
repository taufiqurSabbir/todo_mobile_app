import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* today task*/}
      <View style={styles.taskWapper}>
        <Text style={styles.title}>Today's Task</Text>
        <View style={styles.items}>
          <Task text={"task-1"} />
          <Task text={"task-2"} />
          <Task text={"task-3"} />
          <Task text={"task-4"} />
          <Task text={"task-5"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    justifyContent: "space-between",
  },

  taskWapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
});
