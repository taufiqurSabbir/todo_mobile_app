import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Task from "./components/task";

export default function App() {
  const [task, setTask] = useState();

  const handdleaddTas = () => {
    console.log(task);
  };
  return (
    <View style={styles.container}>
      {/* today task*/}
      <View style={styles.taskWapper}>
        <Text style={styles.title}>Today's Task</Text>

        {/*task list start*/}
        <View style={styles.items}>
          <Task text={"task-1"} />
          <Task text={"task-2"} />
          <Task text={"task-3"} />
          <Task text={"task-4"} />
          <Task text={"task-5"} />
        </View>
        {/*task list end*/}
      </View>

      {/*task input start*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write Today's Task"}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/*task input end*/}
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
  items: {
    marginTop: 15,
  },

  writeTaskWrapper: {
    marginLeft: 12,
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "space-around",
  },

  input: {
    height: 50,
    width: "75%",
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 60,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginLeft: 5,
  },
  addtext: {
    fontSize: 30,
  },
});
