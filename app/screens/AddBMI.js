import React, { useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView, TextInput, Button } from "react-native";
import { color } from "react-native-reanimated";

function AddBMI(props) {


    const [text, onChangeText] = React.useState("");
    // create a onsubmit function
    // create a total calories variable
    const [totalCalories, setTotalCalories] = React.useState(2000);
    // subtract the text from the total calories


  return (
    <SafeAreaView style={styles.container}>
          <Text style={styles.totalCalories}>Calories Remaining: {totalCalories - text}</Text>
      <View style={styles.inputContainer}>
          <Text>Add Calories</Text>
          <TextInput style={styles.input}
            placeholder="Enter Calories"
            onChangeText={text => onChangeText(text)}
           value={text} />
           <Button title="Add" onPress={() => setTotalCalories(totalCalories - text)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
    color: "dodgerblue"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 400,
    height: 44,
    padding: 8,
    margin: 10
  },
  totalCalories: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
});

export default AddBMI;
