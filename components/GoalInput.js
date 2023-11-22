import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [input, setInput] = useState("");

  const handleTextChange = (enteredText) => {
    setInput(enteredText);
  };

  const handleAddGoal = () => {
    if (input) {
      props.addGoals(input);
      setInput("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Create a goal here !"
        onChangeText={handleTextChange}
        value={input}
      />
      <Button title="Add Goal!" onPress={handleAddGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
