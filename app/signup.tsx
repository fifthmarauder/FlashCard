import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TextInput style={styles.inputStyle}>Email</TextInput>
      <TextInput style={styles.inputStyle}>Password</TextInput>
      <Text>
        Have an account?
        <Text
          onPress={() => {
            router.push("/");
          }}
        >
          Login
        </Text>
      </Text>
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

export default SignUp;
