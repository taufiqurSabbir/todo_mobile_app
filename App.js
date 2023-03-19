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
  ScrollView,
  SafeAreaView,
  Keyboard,
} from "react-native";
import Task from "./components/task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const completeTask = (index) => {
    let itemCopy = [...taskItem];
    itemCopy.splice(index, 1);
    setTaskItem(itemCopy);
  };

  const handdleaddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };
  return (
    <View style={styles.container}>
      {/* today task*/}
      <View style={styles.taskWapper}>
        <Text style={styles.title}>Today's Task</Text>

        {/*task list start*/}
        <SafeAreaView style={styles.items}>
          <ScrollView style={styles.scrollView}>
            {taskItem.map((item, index) => {
              return (
                <Task
                  key={index}
                  text={item}
                  donebtn={() => completeTask(index)}
                />
              );
            })}
          </ScrollView>
        </SafeAreaView>
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
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handdleaddTask()}>
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
  scrollView: {},

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
