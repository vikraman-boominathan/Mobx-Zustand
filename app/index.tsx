import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LoginRequest } from "@/types/login.d";
import login from "@/api/auth";
import { router } from "expo-router";
import { authStore } from "@/stores/authStore";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <View className="bg-white p-4 rounded-md space-y-4">
        <Text className="text-2xl font-bold">Login</Text>
        <TextInput
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2"
          value={authStore.email}
          onChangeText={(x) => {
            authStore.setEmail(x);
          }}
        />
        <TextInput
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2"
          value={authStore.password}
          onChangeText={(x) => {
            authStore.setPassword(x);
          }}
        />
        <TouchableOpacity
          className="bg-blue-500 text-white p-2 rounded-md"
          onPress={authStore.login}
        >
          <Text className="text-center text-white">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default Login;
