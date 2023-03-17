import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.tasks}>{props.text}</Text>
      </View>

      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tasks: {
    padding: 20,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#19A7CE",
    borderRadius: 5,
    opacity: 0.5,
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: "#19A7CE",
    borderRadius: 10,
  },
});

export default Task;
