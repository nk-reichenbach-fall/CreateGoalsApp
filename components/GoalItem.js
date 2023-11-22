import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#230051" }}
      onPress={props.onDeleteGoal.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
