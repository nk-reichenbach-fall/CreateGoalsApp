import { useId, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoals = (input) => {
    setGoals((prevValue) => [
      ...prevValue,
      { goalText: input, id: Math.random() + input },
    ]);
  };

  const handleDeleteGoal = (id) => {
    console.log(id);
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoals={addGoals} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(goal) => {
            return (
              <GoalItem
                text={goal.item.goalText}
                id={goal.item.id}
                onDeleteGoal={handleDeleteGoal}
              />
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
  goalsContainer: {
    flex: 5,
  },
});
