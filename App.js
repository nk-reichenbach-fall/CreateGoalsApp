import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);

  const handleTextChange = (enteredText) => {
    setInput(enteredText);
  };

  const addGoals = () => {
    setGoals((prevValue) => [...prevValue, input]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Create a goal here !"
          onChangeText={handleTextChange}
        />
        <Button title="Add Goal!" onPress={addGoals} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(goal) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
