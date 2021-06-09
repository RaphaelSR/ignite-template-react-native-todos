import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";

interface Themeprops {
  theme: boolean;
}

function FlatListHeaderComponent({ theme }: Themeprops) {
  return (
    <View>
      <Text
        style={[
          styles.header,
          theme ? styles.darkHeaderColor : styles.lightHeaderColor,
        ]}
      >
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps extends Themeprops {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  theme,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
              item.done && theme
                ? [styles.taskButton, styles.darkTaskButtonDoneColor]
                : styles.taskButton,
              item.done && !theme
                ? [styles.taskButton, styles.lightTaskButtonDoneColor]
                : styles.taskButton,
            ]}
            //TODO - use onPress, onLongPress and style props
          >
            <View
              testID={`marker-${index}`}
              style={[item.done && theme ? [styles.taskMarker, styles.darkTaskMarkerDoneColor] : styles.taskMarker,
                item.done && !theme ? [styles.taskMarker, styles.lightTaskMarkerDoneColor] : styles.taskMarker]}
              //TODO - use style prop
            />
            <Text
              style={[theme ? styles.darkTaskTextDoneColor : styles.lightTaskTextDoneColor, item.done && styles.taskTextDone]}
              //TODO - use style prop
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  lightHeaderColor: {
    color: "#3D3D4D",
  },
  darkHeaderColor: {
    color: "#565BFF",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderColor: "#3D3D4D",
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  lightTaskButtonDoneColor: {
    backgroundColor: "rgba(25, 61, 223, 0.1)",
  },
  darkTaskButtonDoneColor: {
    backgroundColor: "#212136",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  lightTaskMarkerDoneColor:{
    backgroundColor: "#273FAD",
  },
  darkTaskMarkerDoneColor:{
    backgroundColor: "#565BFF",
  },
  taskTextDone: {
    textDecorationLine: "line-through",
  },
  lightTaskTextDoneColor:{
    color: "#A09CB1",
  },
  darkTaskTextDoneColor:{
    color: "#E1E1E6",
  },
});
