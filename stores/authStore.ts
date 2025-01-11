import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  async checkAuth() {
    const token = await AsyncStorage.getItem("token");
    this.setAuthenticated(!!token);
    return !!token;
  }

  async logout() {
    await AsyncStorage.removeItem("token");
    this.setAuthenticated(false);
  }
}

export const authStore = new AuthStore();
