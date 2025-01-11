import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

export const getList = async () => {
  const token = await AsyncStorage.getItem("token");
  const response = await instance.get("/items", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
