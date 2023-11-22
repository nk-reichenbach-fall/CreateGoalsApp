import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Create a goal here !"
          onChangeText={handleTextChange}
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.handleCloseModal}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  imageContainer: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },
  button: {
    width: 100,
    borderRadius: 4,
    backgroundColor: "white",
  },
});
