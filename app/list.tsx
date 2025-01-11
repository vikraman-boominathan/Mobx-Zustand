import { View, Text, ScrollView } from "react-native";
import { getList } from "@/api/list";
import { useState, useEffect } from "react";
import { ProjectList } from "@/types/list";

const List = () => {
  const [list, setList] = useState<ProjectList>({ projects: [] });

  useEffect(() => {
    getList().then((response) => setList(response.data));
  }, []);

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 justify-center items-center min-h-screen p-4">
        {list.projects.map((project) => (
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
        ))}
      </View>
    </ScrollView>
  );
};

export default List;
