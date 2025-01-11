import instance from "./instance";
import { LoginRequest } from "@/types/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (data: LoginRequest) => {
  const response = await instance.post("/login", data);
  const token = response.data.token;
  await AsyncStorage.setItem("token", token);
  return response;
};
