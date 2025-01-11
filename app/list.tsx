import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { getList } from "@/api/list";
import { useState, useEffect } from "react";
import { ProjectList } from "@/types/list";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { authStore } from "@/stores/authStore";
import "../global.css";
import { projectStore } from "@/stores/projectStore";

const List = observer(() => {
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authStore.checkAuth();
      if (!isAuth) {
        router.replace("/");
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    projectStore.fetchProjects();
  }, []);

  const handleLogout = async () => {
    await authStore.logout();
    router.replace("/");
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 justify-center items-center min-h-screen p-4">
        {projectStore.loading ? (
          <Text>Loading...</Text>
        ) : projectStore.error ? (
          <Text className="text-red-500">{projectStore.error}</Text>
        ) : (
          projectStore.projects.projects.map((project) => (
            <View
              key={project.id}
              className="bg-white rounded-lg p-6 shadow-md w-[90%] mb-4 mx-auto"
            >
              <Text className="text-xl font-bold mb-2 text-center">
                {project.name}
              </Text>
              <Text className="text-gray-600 text-center">
                {project.description}
              </Text>
            </View>
          ))
        )}
        <TouchableOpacity
          className="bg-blue-500 text-white p-2 rounded-md"
          onPress={handleLogout}
        >
          <Text className="text-center text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
});

export default List;
