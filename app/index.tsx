import { StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Login Portal</Text>
      <TextInput style={styles.inputStyle}>Email</TextInput>
      <TextInput style={styles.inputStyle}>Password</TextInput>
      <Text>Don't have an account?SignUp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
  inputStyle: {
    borderWidth: 1,
    width: 250,
    borderColor: "black",
    borderRadius: 24,
    padding: 12,
  },
});
export default App;
