import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoals = (input) => {
    handleAddGoalEnd();
    setGoals((prevValue) => [
      ...prevValue,
      { goalText: input, id: Math.random() + input },
    ]);
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleAddGoalStart = () => {
    setIsModalVisible(true);
  };

  const handleAddGoalEnd = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addGoalButton}>
          <Button
            title="Add New Goal"
            color="#ad75f5"
            onPress={handleAddGoalStart}
          />
        </View>
        <GoalInput
          addGoals={addGoals}
          visible={isModalVisible}
          handleCloseModal={handleAddGoalEnd}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e0858",
  },
  goalsContainer: {
    flex: 5,
    marginTop: 8,
  },
  addGoalButton: {
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
