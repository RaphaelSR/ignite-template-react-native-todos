import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  theme: boolean;
  addTask: (task: string) => void;
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task)
    setTask('')
    //TODO - Call addTask and clean input value 
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input, theme ? styles.darkInputContainerColor : styles.lightInputContainerColor]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme ? "#E1E1E6" : "#000"}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, theme ? styles.darkAddButtonColor : styles.lightAddButtonColor]}
        onPress={handleAddNewTask}
        //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightInputContainerColor: {
    color: "#000",
    backgroundColor: '#F5F4F8',
  },
  darkInputContainerColor: {
    color: "#E1E1E6",
    backgroundColor: '#212136',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  lightAddButtonColor:{
    backgroundColor: '#3FAD27',
  },
  darkAddButtonColor:{
    backgroundColor: '#565BFF',
  },
});