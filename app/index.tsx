import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { login } from "@/api/login";
import { useState } from "react";
import { router } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await login({ email, password });
    if (response.status === 200) {
      router.replace("/list");
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <View className="bg-white p-4 rounded-md space-y-4">
        <Text className="text-2xl font-bold">Login</Text>
        <TextInput
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className="bg-blue-500 text-white p-2 rounded-md"
          onPress={handleLogin}
        >
          <Text className="text-center text-white">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
