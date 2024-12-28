import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LoginRequest } from "@/types/login.d";
import login from "@/api/auth";
import { router } from "expo-router";
export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data: LoginRequest = {
      email,
      password,
    };
    const response = await login(data);
    if (response.status === 200) {
      router.push("/item");
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
}
